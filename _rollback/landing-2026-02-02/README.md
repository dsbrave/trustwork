# Rollback — melhorias da landing (fevereiro 2026)

## O que foi guardado aqui

Cópia dos ficheiros **antes** da última ronda de melhorias na página inicial:

- `LandingView.tsx`
- `en.json`
- `pt.json`

## Como voltar à versão anterior

### Opção A — Copiar estes ficheiros por cima

Na pasta do projeto (`TrustWork-Australia`):

```bash
cp _rollback/landing-2026-02-02/LandingView.tsx components/landing/LandingView.tsx
cp _rollback/landing-2026-02-02/en.json messages/en.json
cp _rollback/landing-2026-02-02/pt.json messages/pt.json
```

Se nessa altura também tinhas alterado `es.json`, `zh.json`, etc., repõe-os a partir do Git ou de outro backup.

### Opção B — Git (se o projeto estiver versionado)

Antes de aplicar mudanças novas no futuro:

```bash
git add -A && git commit -m "checkpoint antes de alterações à landing"
git branch backup/landing-pre-change
```

Para voltar: `git checkout backup/landing-pre-change -- components/landing/LandingView.tsx messages/`
