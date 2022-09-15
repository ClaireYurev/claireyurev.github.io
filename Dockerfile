FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /
COPY package.json yarn.lock next.config.js ./
RUN yarn install

# Rebuild source code only when needed
FROM node:16-alpine AS builder
WORKDIR /
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /
ENV NODE_ENV production

# Claire: using custom next.config.js:
COPY --from=builder /next.config.js ./
COPY --from=builder /public ./public
COPY --from=builder /.next ./.next
# Below doesn't exist in this app anymore 
#COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /package.json .
# COPY --from=builder /app/.yarn ./.yarn

RUN yarn install --production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /.next
RUN npm install react
RUN npm install react-dom
RUN npx browserslist@latest --update-db
USER nextjs

EXPOSE 8080
ENV PORT 8080
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]