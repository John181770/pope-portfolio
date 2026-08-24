# ============================================================
# Stage 1: deps — install all dependencies
# ============================================================
FROM node:20-alpine AS deps

# Enable corepack so pnpm is available without a separate install step
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy lockfiles and manifests first for optimal layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install production + dev dependencies (needed for build)
RUN pnpm install --frozen-lockfile

# ============================================================
# Stage 2: builder — compile the Next.js app
# ============================================================
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Bring in installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy full source
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the production bundle
RUN pnpm run build

# ============================================================
# Stage 3: runner — lean production image
# ============================================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copy only what Next.js needs to run
COPY --from=builder /app/public          ./public
COPY --from=builder /app/.next/static    ./.next/static
COPY --from=builder /app/.next           ./.next
COPY --from=builder /app/node_modules    ./node_modules
COPY --from=builder /app/package.json    ./package.json

# Set correct ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

# Expose the port Next.js listens on
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js production server
CMD ["node_modules/.bin/next", "start"]
