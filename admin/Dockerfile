# FROM node:18-alpine as base

# FROM base as builder

# WORKDIR /home/node
# COPY package*.json ./

# COPY . .
# RUN npm install
# RUN yarn build

# FROM base as runtime

# ENV NODE_ENV=production

# WORKDIR /home/node
# COPY package*.json  ./

# RUN yarn install --production
# COPY --from=builder /home/node/dist ./dist
# COPY --from=builder /home/node/build ./build

# EXPOSE 3000

# CMD ["node", "dist/server.js"]

FROM node:18-alpine

WORKDIR /home/node/app/
COPY package*.json ./
COPY . .
RUN npm install

CMD ["npm", "run", "dev"]

# FROM base as runtime

# ENV NODE_ENV=production

# WORKDIR /home/node
# COPY package*.json  ./

# RUN yarn install --production
# COPY --from=builder /home/node/dist ./dist
# COPY --from=builder /home/node/build ./build

# EXPOSE 3000

# CMD ["node", "dist/server.js"]



