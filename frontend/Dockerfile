FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN chmod +x ./node_modules/.bin/tsc && \
    chmod +x ./node_modules/.bin/vite
RUN npm run build
CMD cp -r dist result_build
