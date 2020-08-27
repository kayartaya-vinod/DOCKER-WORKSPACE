FROM node:alipne

WORKDIR /usr/projects
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm start"]