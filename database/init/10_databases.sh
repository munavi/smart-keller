#!/usr/bin/env bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -c "CREATE USER ${APP_USER} WITH LOGIN CREATEDB PASSWORD '${APP_PASSWORD}';"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -c "CREATE USER ${WEB_USER} WITH LOGIN CREATEDB PASSWORD '${WEB_PASSWORD}';"

FILES=/tmp/*.sql

echo "Creating Database ${APP_DATABASE}"
createdb --username ${APP_USER} ${APP_DATABASE}

for f in $FILES
do
  echo "Inserting schema and data into ${APP_DATABASE}"
  psql -v ON_ERROR_STOP=1 --username ${APP_USER} -f $f ${APP_DATABASE}
done

echo "------------> 10_sql.sh has finished sucessfully"
