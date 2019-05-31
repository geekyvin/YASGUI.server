FROM node:12
# app directory
WORKDIR src
# Install app dependencies
COPY package*.json ./

RUN npm install --global --production

#If you are building your code for production
# RUN npm ci --only=production

#Bundle app source
COPY . .

EXPOSE 4545

CMD ["npm", "run", "start"]
