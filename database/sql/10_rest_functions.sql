/*************************************************************************************
 * Account: Functions
 *************************************************************************************/

BEGIN;

/* Cleanup */

DROP FUNCTION IF EXISTS rest_helper                          CASCADE;
DROP FUNCTION IF EXISTS json_status                          CASCADE;
DROP FUNCTION IF EXISTS json_attr_value                      CASCADE;
DROP FUNCTION IF EXISTS json_attr_value_not_null             CASCADE;
DROP FUNCTION IF EXISTS json_attr_value_d_untainted          CASCADE;
DROP FUNCTION IF EXISTS json_attr_value_not_null_d_untainted CASCADE;

/* Extraction of JSON Attributes */

-- Extratcs the value of an attribute  from a JSON object,
-- if this attribute exists (even if the value equals NULL).
-- Otherwise, it returns the default value passed to the function.
CREATE OR REPLACE FUNCTION
    json_attr_value
(_data JSONB, _attr TEXT, _default TEXT)
    RETURNS TEXT
    IMMUTABLE PARALLEL SAFE
    LANGUAGE SQL
AS
$$
SELECT
    CASE WHEN _data ? _attr THEN (_data->>_attr)::TEXT ELSE _default END;
$$
;

-- json_attr_value_not_null
-- Extratcs the value of an attribute from a JSON object,
-- if this attribute exists and is not equal to NULL.
-- Otherwise, it returns the default value passed to the function.
CREATE OR REPLACE FUNCTION
    json_attr_value_not_null
(_data JSONB, _attr TEXT, _default TEXT)
    RETURNS TEXT
    IMMUTABLE PARALLEL SAFE
    LANGUAGE SQL
AS
$$
SELECT
    CASE WHEN _data ? _attr AND _data->>_attr IS NOT NULL THEN (_data->>_attr)::TEXT ELSE _default END;
$$
;

-- Extratcs the trimmed value of an attribute (type D_UNTAINTED) from a JSON object,
-- if this attribute exists (even if the value equals NULL).
-- Otherwise, it returns the default value passed to the function.
CREATE OR REPLACE FUNCTION
    json_attr_value_d_untainted
(_data JSONB, _attr TEXT, _default D_UNTAINTED)
    RETURNS D_UNTAINTED
    IMMUTABLE PARALLEL SAFE
    LANGUAGE SQL
AS
$$
SELECT
    CASE WHEN _data ? _attr
             THEN CASE WHEN _data ->>_attr IS NULL THEN NULL
                       WHEN trim(_data->>_attr::TEXT) <> '' THEN trim(_data->>_attr)::D_UNTAINTED
                       ELSE _default
            END
         ELSE _default
        END;
$$
;

-- Extratcs the trimmed value of an attribute (type D_UNTAINTED) from a JSON object,
-- if this attribute exists (even if the value equals NULL).
-- Otherwise, it returns the default value passed to the function.
CREATE OR REPLACE FUNCTION
    json_attr_value_not_null_d_untainted
(_data JSONB, _attr TEXT, _default D_UNTAINTED)
    RETURNS D_UNTAINTED
    IMMUTABLE
    LANGUAGE SQL
AS
$$
SELECT
    CASE WHEN _data ? _attr
             THEN CASE WHEN _data ->>_attr IS NULL THEN _default
                       WHEN trim(_data->>_attr::TEXT) <> '' THEN trim(_data->>_attr)::D_UNTAINTED
                       ELSE _default
            END
        END;
$$
;

/* JSON Status */

-- Returns a JSON OBJECT which containts HTTP status information.
CREATE OR REPLACE FUNCTION
    json_status
(_status     INTEGER,
 _id         UUID,
 _pgstate    TEXT  DEFAULT '00000',
 _constraint TEXT  DEFAULT NULL,
 _message    TEXT  DEFAULT NULL,
 _data       JSONB DEFAULT NULL
)
    RETURNS JSONB
    IMMUTABLE PARALLEL SAFE
    LANGUAGE SQL
AS
$$
SELECT JSONB_BUILD_OBJECT
           ('status',    _status,
            'id',         _id,
            'pgstate',    _pgstate ,
            'constraint', _constraint,
            'message',    _message,
            'data',       _data
           );
$$
;

/* REST Helper */

CREATE OR REPLACE FUNCTION
    rest_helper(_sql               TEXT,
                _id                UUID    DEFAULT NULL,
                _data              JSONB   DEFAULT NULL,
                _constraint        TEXT    DEFAULT 'id_exists',
                _postgres_status   TEXT    DEFAULT '02000',
                _http_status       INTEGER DEFAULT 200,
                _http_error_status INTEGER DEFAULT 400
)
    RETURNS  TABLE ("result" JSONB)
    LANGUAGE plpgsql
AS
$$
DECLARE
    _id_      UUID DEFAULT NULL;
    _pgstate_ TEXT;
    _cname_   TEXT;
    _message_ TEXT;

BEGIN     -- $1 = _id, $2 = _data
EXECUTE _sql || ' RETURNING "id"' INTO _id_ USING _id, _data;

IF (_id_ IS NOT NULL)
THEN
    RETURN QUERY
        SELECT json_status(_http_status, _id_);
ELSE
    RETURN QUERY
        SELECT json_status(_http_error_status, _id, _postgres_status , _constraint, _message_);
END IF;

EXCEPTION WHEN OTHERS THEN
    GET STACKED DIAGNOSTICS
        _pgstate_ = RETURNED_SQLSTATE,
        _cname_   = CONSTRAINT_NAME,
        _message_ = MESSAGE_TEXT;
    RETURN QUERY
        SELECT json_status(400,
                           _id,
                           _pgstate_,
                           CASE WHEN _cname_ <> '' THEN _cname_ ELSE _message_ END,
                           _message_
                   );
END
$$
;

/* Save it */

COMMIT;
