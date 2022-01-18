FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY index.js index.js
COPY src src

CMD npm start