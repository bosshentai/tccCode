FROM node:18.1.0-alpine3.15
# FROM node:18.1.0
# FROM node:18.1.0-ubuntu

WORKDIR /usr/src/app
RUN apk add --no-cache bash
RUN ln -sf /bin/bash /bin/sh

COPY package*.json ./

COPY . .





# USER react

# WORKDIR /home/react/app

# RUN npm install


# EXPOSE 3000

# CMD ["npm", "start"]






























# # pull the base image
# FROM node:alpine

# USER node



# # set the working direction
# WORKDIR /usr/src/app


# # COPY package.json /app/package.json
# # COPY ["package.json", "package-lock.json", "./"]
# # COPY package*.json ./
# COPY  package.json ./

# RUN  npm install

# COPY  . .

# EXPOSE 3000

# CMD ["npm", "start"]

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH


# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install
# RUN 

# # add app
# COPY . ./

# #
# RUN npm run build

# EXPOSE 3000

# # start app
# CMD ["npm", "start"]