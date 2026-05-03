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
npm run dev       # http://localhost:3002
```

Abra no browser: **http://localhost:3002** (porta **3002**, não 3001).  
Se não carregar: experimente **http://127.0.0.1:3002**.

### O site não abre (“connection refused” ou página em branco)

1. **Tem de estar na pasta certa do projeto** (`TrustWork-Australia` no Desktop), não noutro clone ou no repo Camera Real.
2. **O servidor tem de estar a correr**: no terminal deve aparecer `Ready` e `Local: http://localhost:3002`. Sem este comando aberto, não há site local.
3. **Confirme a porta**: os scripts usam **3002**. Se abrir `localhost:3001`, não vai funcionar.
4. **Porta ocupada**: se der erro “port already in use”, pare o outro processo (`lsof -i :3002` no macOS) ou use outra porta: `npx next dev -p 3003`.

Este repositório é **independente** do projeto Camera Real.

## Enviar código para o GitHub

Remoto: **[github.com/dsbrave/trustwork](https://github.com/dsbrave/trustwork)** (repo pode estar vazio até ao primeiro push).

Na pasta do projeto, no terminal:

```bash
bash scripts/push-github.sh
```

Ou manualmente:

```bash
git init
git add -A
git commit -m "Initial commit: TrustWork Australia"
git branch -M main
git remote add origin https://github.com/dsbrave/trustwork.git   # ou: git remote set-url origin ...
git push -u origin main
```

**Autenticação:** GitHub já não aceita password em HTTPS — usa um [Personal Access Token](https://github.com/settings/tokens) ou [SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). Se o `push` pedir credenciais, username = teu utilizador GitHub, password = token.
