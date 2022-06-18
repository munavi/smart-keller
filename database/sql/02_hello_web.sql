/*************************************************************************************
 * Erweiterstes Beispiel aus der Vorlesung "Datenmanagement" von Wolfgang Kowarschick
 *************************************************************************************/

/* *** Schema *** */
BEGIN;

/* Cleanup */

DROP FUNCTION IF EXISTS i18n (_lang VARCHAR) CASCADE;

/* Functions */

CREATE FUNCTION i18n(_lang VARCHAR) RETURNS TABLE (data JSONB)
LANGUAGE SQL
SECURITY DEFINER
AS
$$
SELECT data
FROM
  (SELECT data, 0 AS pos FROM hello WHERE id=_lang::VARCHAR
  UNION ALL
   SELECT data, 1        FROM hello WHERE id='de'
   ORDER BY pos
   FETCH FIRST ROW ONLY
  ) _
$$
;

GRANT EXECUTE ON FUNCTION i18n(VARCHAR) TO web;

COMMIT;

