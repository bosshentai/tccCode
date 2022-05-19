FROM node:alpine

WORKDIR /usr/src/app

RUN apk add --no-cache bash
RUN ln -sf /bin/bash /bin/sh

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate
# RUN npx prisma migrate dev

EXPOSE 5000

CMD ["npm","run","dev"]