FROM node:16
#app directory
WORKDIR /usr/src/app
#copy package.json and package lock to dir
COPY package*.json ./

#install dependencies
RUN npm install

COPY . .

EXPOSE 100

CMD ["node","index.js"]