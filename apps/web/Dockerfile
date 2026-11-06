# syntax=docker/dockerfile:1

# ============================================
# Dependencies stage
# ============================================
FROM oven/bun:1.3.5-slim AS deps
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/web/package.json apps/web/
COPY packages/config/package.json packages/config/
COPY packages/backend/package.json packages/backend/
COPY packages/env/package.json packages/env/
COPY packages/ui/package.json packages/ui/

RUN --mount=type=cache,target=/root/.bun/install/cache \
  bun install

# ============================================
# Builder stage
# ============================================
FROM deps AS builder
WORKDIR /app

COPY packages/config packages/config
COPY packages/env packages/env
COPY packages/ui packages/ui

COPY packages/backend/convex packages/backend/convex

COPY apps/web apps/web

WORKDIR /app/apps/web
RUN bun run build

# ============================================
# Runtime stage (Nginx server)
# ============================================
FROM nginx:1.27-alpine AS production
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/apps/web/dist ./

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
