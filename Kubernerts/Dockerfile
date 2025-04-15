FROM node:19
WORKDIR /app
COPY package*.json ./
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false && npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

