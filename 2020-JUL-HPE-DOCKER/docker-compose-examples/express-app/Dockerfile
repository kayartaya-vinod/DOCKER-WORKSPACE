FROM node:alpine

WORKDIR /usr/vinod/app

ENV SERVER_PORT=9000

COPY package.json ./

RUN npm install

COPY ./ ./

CMD [ "node", "server.js" ]