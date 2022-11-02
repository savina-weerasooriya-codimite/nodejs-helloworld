FROM node:16.3.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]