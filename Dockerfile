# pull the official base image
FROM node:14-alpine

# set working direction

WORKDIR /usr/src/app

# install application dependencies

COPY package*.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]