# Important Commands
## Docker

To build and run all the containers (important for development, when changes to docker-compose.yml have been made)

```bash
cd smart_keller_postgres
./create_dotenv.sh
docker compose up --build
docker compose up -d # permanently running
docker compose exec backend sh
```

Use only special containers:

```bash
# postgres only
docker compose -f compose-database.yml up
# postgres and backend only
docker compose -f compose-backend.yml up
# production mode
docker volume create pgdata # one time only
docker compose -f compose-production.yml up 
```

When docker is running, the containers can be inspected:

```bash
docker compose exec database sh
docker compose exec backend sh
docker compose exec frontend sh
```

To run all the containers from the docker-compose.yml:

```bash
docker compose up
```

To stop all the containers in the docker-compose.yml:

```bash
docker compose down
```

Get information:

```bash
docker ps                             # list running containers
docker ps -a                          # list all containers
docker inspect <container docker id>  # info about a specific container
docker system df -v                   # space info
docker system info                    # system info
```

To remove all docker containers: (The database is stored in a volume "postgres", which does not get deleted when container is deleted)

```bash
docker stop `docker ps -a -q` && docker rm `docker ps -a -q`
docker-compose rm -v # alternative, the first command is better
```

To remove the volumes:

```bash
docker volume ls
docker stop `docker ps -a -q` && docker rm `docker ps -a -q`; docker volume prune # remove all volumes
```

To remove all:

```bash
docker system prune
docker kill `docker ps -q`
docker rm `docker ps -a -q`
docker rmi `docker images -q -f dangling=true`
docker rmi -f  `docker images -q`
```

## Adminer

Runs on <http://localhost:11000>

Login as postgres (root):

```bash
Datenbank System: PostgreSQL
Server:           postgres
Benutzer:         postgres
Passwort:         postgres
Datenbank:        postgres
```

```sql
SELECT * FROM pg_catalog.pg_user;
```

Login as web (root):

```bash
Datenbank System: PostgreSQL
Server:           postgres
Benutzer:         web
Passwort:         web
Datenbank:        hello
```

```sql
SELECT * FROM hello;
```
