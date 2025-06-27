FROM node:24-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:24-alpine AS runtime-stage

WORKDIR /app

COPY --from=build-stage /app/build ./build
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/package.json ./package.json

EXPOSE 3000

ENV NODE_ENV production

CMD ["npm", "run", "prod"]
