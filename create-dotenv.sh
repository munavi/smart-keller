#!/usr/bin/env bash
set -e

# $1 password for superuser "postgres" (default: postgres; must be changed in production mode)
# $2 password for user "web" (default: web, must be changed in production mode)
# $3 password for user "web" (default: web, must be changed in production mode)
# $4 frontend port (default: 3000)
# $5 backend port (default: 4000)
# $6 adminer port (default: 11000)
# $7 postgres port (default:5432)
# $8 frontend host (default: http://localhost/)
# $9 backend host (default: http://localhost/)
# $10 number of seconds until the access tokex expires (default: 1800)

APP_DATABASE="smart_keller"

FRONTEND_PORT="${4-3000}"
BACKEND_PORT="${5-4000}"
POSTGRES_PORT="${7-5432}"
ADMINER_PORT="${6-11000}"

POSTGRES_CONTAINER_PORT="5432"
ADMINER_CONTAINER_PORT="8080"

declare -A frontend=(
  ["dir"]="frontend"
  ["FRONTEND_PORT"]="$FRONTEND_PORT"
  ["VITE_REST_HOSTNAME"]="${8-http://localhost}:$FRONTEND_PORT"
)

declare -A backend=(
  ["dir"]="backend"
  ["PORT"]="$BACKEND_PORT"
  ["SERVER"]="${9-http://localhost}:$BACKEND_PORT"
  ["PG_HOST"]="localhost"
  ["PG_USER"]="app"
  ["PG_PASSWORD"]="${2-app}"
  ["PG_DATABASE"]="$APP_DATABASE"
  ["PG_PORT"]="$POSTGRES_PORT"
)

declare -A docker=(
  ["dir"]="."
  ["IMAGE_TAG"]="$APP_DATABASE"

  ["FRONTEND_PORT"]="$FRONTEND_PORT"
  ["FRONTEND_CONTAINER_PORT"]="$FRONTEND_PORT"

  ["BACKEND_PORT"]="$BACKEND_PORT"
  ["BACKEND_CONTAINER_PORT"]="$BACKEND_PORT"
  ["ACCESS_TOKEN_SECRET"]=$(openssl rand -hex 64)
  ["REFRESH_TOKEN_SECRET"]=$(openssl rand -hex 64)

  ["DATABASE_PORT"]="$POSTGRES_PORT"
  ["DATABASE_CONTAINER_PORT"]="$POSTGRES_CONTAINER_PORT"
  ["ADMINER_PORT"]="$ADMINER_PORT"
  ["ADMINER_CONTAINER_PORT"]="$ADMINER_CONTAINER_PORT"
  ["POSTGRES_USER"]="postgres"
  ["POSTGRES_PASSWORD"]="${1-postgres}"
  ["POSTGRES_DATABASE"]="postgres"
  ["APP_USER"]="app"
  ["APP_PASSWORD"]="${2-app}"
  ["APP_DATABASE"]="$APP_DATABASE"
  ["WEB_USER"]="web"
  ["WEB_PASSWORD"]="${3-web}"
)

create_env_variables(){
  for env in $1
  do
    declare -n dict=$env
    directory=${dict[dir]}
    cd $directory
    echo "Creating $env .env in $directory"
    [ ! -e .env ] || rm .env
    for var in "${!dict[@]}"
    do
      [ "$var" != "dir" ] && echo "$var=${dict[$var]}" >> .env
    done
    unset -n dict
    cd - >/dev/null
  done
}

create_env_variables 'frontend backend docker'

echo "------------> $0 has finished successfully"
