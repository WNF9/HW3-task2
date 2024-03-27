FROM node:latest

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

# Expose the port that your Node.js application listens on
EXPOSE 8080

# Command to run the add method when the container starts
CMD ["node", "add.js"]