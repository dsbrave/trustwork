# TrustWork Australia

Plataforma de empregos para imigrantes na Austrália (Next.js 14, Prisma, next-intl).

## Requisitos

- Node 18+
- PostgreSQL (local, Neon ou Supabase) — ver `.env.example`

## Setup

```bash
cp .env.example .env
npm install
npm run db:generate
npm run db:push   # após configurar DATABASE_URL
npm run dev       # http://localhost:3001
```

Este repositório é **independente** do projeto Camera Real.
