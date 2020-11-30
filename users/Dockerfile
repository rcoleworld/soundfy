FROM node:latest
RUN npm install -g nodemon 
RUN mkdir -p /usr/src/app/users

WORKDIR /usr/src/app/users

COPY package.json /usr/src/app/users

RUN npm install tsc --silent
RUN npm install

COPY . .
EXPOSE 5000
CMD [ "npm", "start"]