
FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["npm", "run", "dev"]