FROM node:latest
RUN npm install -g nodemon 
RUN mkdir -p /usr/src/app/media

WORKDIR /usr/src/app/media

COPY package.json /usr/src/app/media

RUN npm install tsc --silent
RUN npm install


COPY . .
EXPOSE 5000
CMD [ "npm", "run", "start"]