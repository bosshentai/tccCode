FROM node:alpine

RUN apk add --no-cache bash



WORKDIR /home/node/app



COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .


# EXPOSE 5000

# CMD ["npm","run","dev"]