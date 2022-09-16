FROM node:lts as dependencies
WORKDIR /claireyurev
COPY package*.json yarn.lock next.config.js ./
#RUN npm install -g yarn --force
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /claireyurev
COPY . .
COPY --from=dependencies /claireyurev/node_modules ./node_modules
#RUN npm install -g yarn --force
RUN yarn build

FROM node:lts as runner
WORKDIR /claireyurev
ENV NODE_ENV production

COPY --from=builder /claireyurev/.next ./.next
COPY --from=builder /claireyurev/about ./about
COPY --from=builder /claireyurev/components ./components
COPY --from=builder /claireyurev/node_modules ./node_modules
COPY --from=builder /claireyurev/pages ./pages
COPY --from=builder /claireyurev/public ./public
COPY --from=builder /claireyurev/styles ./styles
COPY --from=builder /claireyurev/package.json ./package.json
COPY --from=builder /claireyurev/next.config.js ./next.config.js

RUN addgroup --system --gid 1001 nodejs
# RUN adduser -S nextjs -u 1001
RUN adduser nextjs --system --uid 1001 --ingroup nodejs
RUN chown -R nextjs:nodejs /claireyurev/.next
#RUN npm install -g yarn --force
USER nextjs

EXPOSE 8080
CMD ["yarn", "start"]