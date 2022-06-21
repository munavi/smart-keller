/*************************************************************************************
 * Account: REST Functions
 *************************************************************************************/

BEGIN;

/* Cleanup */

DROP FUNCTION IF EXISTS post_account  (          _data JSONB);
DROP FUNCTION IF EXISTS put_account   (_id UUID, _data JSONB);
DROP FUNCTION IF EXISTS patch_account (_id UUID, _data JSONB);
DROP FUNCTION IF EXISTS delete_account(_id UUID);

/* Functions */

CREATE FUNCTION post_account(_data JSONB) RETURNS TABLE ("result" JSONB)
    LANGUAGE plpgsql
AS
$$
BEGIN
RETURN QUERY
SELECT rest_helper -- $1 = _id, $2 = _data
           ('INSERT INTO "account"("name", "user", "email", "password", "isAdmin")
           VALUES(json_attr_value_d_untainted($2, ''name'',  NULL),
                  json_attr_value_d_untainted($2, ''user'',  NULL),
                  json_attr_value_d_untainted($2, ''email'', NULL),
                  ($2->>''password'')::TEXT,
                  COALESCE(($2->>''isAdmin'' )::BOOLEAN, false)
                 )
          ',
            _data => _data, _http_status => 201
         );
END
$$
;

CREATE FUNCTION put_account(_id UUID, _data JSONB) RETURNS TABLE ("result" JSONB)
    LANGUAGE plpgsql
AS
$$
BEGIN
RETURN QUERY
SELECT rest_helper -- $1 = _id, $2 = _data
           ('UPDATE "account" a
           SET    "name"     = json_attr_value_d_untainted($2, ''name'',  NULL),
                  "user"     = json_attr_value_d_untainted($2, ''user'',  NULL),
                  "email"    = json_attr_value_d_untainted($2, ''email'', NULL),
                  "password" = COALESCE(($2->>''password'')::TEXT, a."password"),
                  "isAdmin"  = COALESCE(($2->>''isAdmin'')::BOOLEAN, false)
           WHERE  a."id" = $1
          ',
            _id => _id, _data => _data, _constraint => 'account_exists'
         );
END
$$
;

CREATE FUNCTION patch_account(_id UUID, _data JSONB) RETURNS TABLE ("result" JSONB)
    LANGUAGE plpgsql
AS
$$
BEGIN
RETURN QUERY
SELECT rest_helper -- $1 = _id, $2 = _data
           ('UPDATE "account" a
           SET    "name"     = json_attr_value_d_untainted($2, ''name'',     a."name"),
                  "user"     = json_attr_value_d_untainted($2, ''user'',     a."user"),
                  "email"    = json_attr_value_d_untainted($2, ''email'',    a."email"),
                  "password" = json_attr_value_not_null   ($2, ''password'', a."password")::TEXT,
                  "isAdmin"  = json_attr_value_not_null   ($2, ''isAdmin'',  a."isAdmin"::TEXT)::TEXT::BOOLEAN
           WHERE  a."id" = $1
          ',
            _id => _id, _data => _data, _constraint => 'account_exists'
         );
END
$$
;

CREATE FUNCTION delete_account(_id UUID) RETURNS TABLE ("result" JSONB)
    LANGUAGE plpgsql
AS
$$
BEGIN
RETURN QUERY
SELECT rest_helper -- $1 = _id, $2 = _data
           ('DELETE
           FROM   "account" a
           WHERE  a."id" = $1
          ',
            _id => _id, _constraint => 'account_exists'
         );
END
$$
;

/* Save it */

COMMIT;

/*
DELETE FROM account WHERE "user" = 'kowa' OR "user" = 'wk';

SELECT * FROM "account";

SELECT *
FROM   post_account
       ( '{ "name":     "Wolfgang Kowarschick",
            "user":     "wk",
            "email":    "wolfgang.kowarschick@hs-augsburg.de",
            "password": "changeit",
            "isAdmin":  false
          }
         '
       );

SELECT * FROM "account";

SELECT check_password('wk', 'changeit') AS login;
SELECT check_password('wolfgang.kowarschick@hs-augsburg.de', 'changeit') AS login;
SELECT check_password('kowa', 'geheim') AS login;
SELECT check_password('wolfgang@kowarschick.de', 'geheim') AS login;

SELECT *
FROM   put_account
       ( (SELECT "id" FROM "account" WHERE "user" = 'wk'),
         '{ "name":     "Wolfgang",
            "user":     "kowa",
            "email":    "wolfgang@kowarschick.de",
            "password": "geheim",
            "isAdmin":  true
          }
         '
       );

SELECT * FROM "account";

SELECT *
FROM   patch_account
       ( (SELECT "id" FROM "account" WHERE "user" = 'kowa'),
         '{ "name":     "Wolfgang",
            "user":     "kowa",
            "email":    "wolfgang@kowarschick.de"
          }
         '
       );

SELECT * FROM "account";

SELECT check_password('wk', 'changeit') AS login;
SELECT check_password('wolfgang.kowarschick@hs-augsburg.de', 'changeit') AS login;
SELECT check_password('wk', 'geheim') AS login;
SELECT check_password('wolfgang.kowarschick@hs-augsburg.de', 'geheim') AS login;
SELECT check_password('kowa', 'geheim') AS login;
SELECT check_password('wolfgang@kowarschick.de', 'geheim') AS login;

SELECT "result"
FROM   patch_account
       ( (SELECT "id" FROM "account" WHERE "user" = 'kowa'),
         '{ "user":  null,
            "email": "wk@hs-augsburg.de"
          }
         '
       );

SELECT * FROM "account";

SELECT "result"
FROM   patch_account
       (  (SELECT "id" FROM "account" WHERE "email" = 'wk@hs-augsburg.de'),
         '{ "user":  "kowa",
            "email": null
          }
         '
       );

SELECT * FROM "account";

SELECT "result"
FROM   patch_account
       ( (SELECT "id" FROM "account" WHERE "user" = 'kowa'),
         '{ "user":  null,
            "email": null
          }
         '
       );

SELECT * FROM "account";

SELECT "result"
FROM   patch_account
       ( (SELECT "id" FROM "account" WHERE "user" = 'kowa'),
         '{ "isAdmin": true }'
       );

SELECT * FROM "account";

SELECT "result"
FROM   patch_account
       ( (SELECT "id" FROM "account" WHERE "user" = 'kowa'),
         '{ "isAdmin": false }'
       );

SELECT * FROM "account";

SELECT "result"
FROM   delete_account
       ((SELECT "id" FROM "account" WHERE "user" = 'kowa'));

SELECT * FROM "account";
*/
