FROM node:16.17.0

WORKDIR /acg-alba/

COPY ./package.json /acg-alba/
COPY ./package-lock.json /acg-alba/

RUN npm install
COPY . /acg-alba
CMD npm run start:dev