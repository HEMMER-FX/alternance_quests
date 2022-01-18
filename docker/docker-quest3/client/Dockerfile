FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
COPY public public
RUN npm install
COPY src src
CMD npm start