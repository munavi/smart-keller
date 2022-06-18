FROM node:lts-alpine

ARG PORT
ENV PORT $PORT

# make the 'frontend' folder the current working directory
WORKDIR /frontend

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN npm install

COPY . .
COPY vite.config.docker.ts /frontend/vite.config.ts

CMD ["npm", "run", "dev"]
