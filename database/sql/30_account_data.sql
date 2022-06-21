/*************************************************************************************
 * Account: Data
 *************************************************************************************/

BEGIN;

/* Data */

INSERT INTO account("name", "user", "password", "isAdmin")
VALUES
    ('Administrator', 'admin', 'changeit', true),
    ('Redakteur',     'redak', 'changeit', false)
;

/* Save it */

COMMIT;

/*
SELECT * FROM account;
*/
