FROM node:12 as builder

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g concurrently

RUN npm install --quiet

RUN npm install -g @angular/cli

COPY . .

EXPOSE 8000

ARG env=prod

RUN cd /usr/app/public && npm install && ng build --prod
RUN cd /usr/app/

CMD ["npm", "run", "server"]