FROM node

WORKDIR /APP

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 2727

CMD [ "npm", "start" ]