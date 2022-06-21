/*************************************************************************************
 * Account: Table plus Table Triggers
 *************************************************************************************/

BEGIN;

/* Cleanup */

DROP TRIGGER  IF EXISTS one_admin_exists_delete ON account CASCADE;
DROP TRIGGER  IF EXISTS one_admin_exists_update ON account CASCADE;
DROP FUNCTION IF EXISTS one_admin_exists_function          CASCADE;

DROP TRIGGER  IF EXISTS encrpyt_password_trigger ON account CASCADE;
DROP FUNCTION IF EXISTS encrpyt_password_function           CASCADE;

DROP TABLE IF EXISTS account CASCADE;

/* Tables */

CREATE TABLE account
("id"       UUID        DEFAULT gen_random_uuid(),
 "name"     D_UNTAINTED,
 "user"     D_UNTAINTED,
 "email"    D_EMAIL,
 "password" VARCHAR   /*NOT NULL*/,
 "isAdmin"  BOOLEAN     NOT NULL DEFAULT false,

 CONSTRAINT account_pk
     PRIMARY KEY ("id"),

 CONSTRAINT account_check_username
     CHECK ("user" <> ''),

 CONSTRAINT account_unique_username
     UNIQUE ("user"),

 CONSTRAINT account_unique_email
     UNIQUE ("email"),

 CONSTRAINT account_check_username_email
     CHECK ("user" IS NOT NULL OR "email" IS NOT NULL),

    -- in order to get a named constraint
 CONSTRAINT account_check_password_not_null
     CHECK ("password" IS NOT NULL)
);

/* Trigger */

CREATE FUNCTION encrpyt_password_function()
    RETURNS TRIGGER
    LANGUAGE plpgsql
AS
$$
BEGIN
    -- Here, a "password" may be checked for strength.

    -- A new "password" is salted and hashed.
    IF ( TG_OP = 'INSERT' OR
         (TG_OP = 'UPDATE' AND NEW."password" <> OLD."password")
        )
    THEN NEW."password" = crypt(NEW."password", gen_salt('bf',12));
    END IF;

    RETURN NEW;
END
$$
;

CREATE TRIGGER encrpyt_password_trigger
    BEFORE INSERT OR UPDATE
    ON account
    FOR EACH ROW
EXECUTE PROCEDURE encrpyt_password_function()
;

CREATE FUNCTION one_admin_exists_function() RETURNS TRIGGER
    LANGUAGE plpgsql
AS
$$
BEGIN
    IF NOT EXISTS (SELECT * FROM "account" WHERE "isAdmin" = true)
    THEN RAISE EXCEPTION 'account_one_admin_exists';
    END IF;
    RETURN NULL;
END
$$
;

CREATE CONSTRAINT TRIGGER one_admin_exists_delete
    AFTER DELETE
    ON account
    NOT DEFERRABLE
    FOR EACH ROW
EXECUTE PROCEDURE one_admin_exists_function()
;

CREATE CONSTRAINT TRIGGER one_admin_exists_update
    AFTER UPDATE
    ON account
    NOT DEFERRABLE
    FOR EACH ROW
    WHEN (OLD."isAdmin" = true AND NEW."isAdmin" = false)
EXECUTE PROCEDURE one_admin_exists_function()
;

/* Save it */

COMMIT;
