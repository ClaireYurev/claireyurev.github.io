FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json yarn.lock next.config.js ./
RUN npm install --frozen-lockfile

# Rebuild source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Claire: using custom next.config.js
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
# Below doesn't exist in this app anymore
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# The missing pieces
COPY --from=builder /app/about ./about
COPY --from=builder /app/components ./components
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/styles ./styles

# COPY --from=builder /app/.yarn ./.yarn

RUN yarn install --production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
RUN npm install react
RUN npm install react-dom
RUN npx browserslist@latest --update-db
#RUN npm run build
USER nextjs

EXPOSE 8080
ENV PORT 8080
ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["yarn", "start"]

CMD ["npm", "run", "build" "&&", "yarn", "start"]