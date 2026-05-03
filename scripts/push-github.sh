#!/usr/bin/env bash
# Envia o código para https://github.com/dsbrave/trustwork
# Uso: na pasta do projeto, executar: bash scripts/push-github.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ ! -d .git ]; then
  git init
  echo "Repositório Git inicializado."
fi

git add -A

if git diff --staged --quiet; then
  echo "Nada para commitar (sem alterações)."
else
  git commit -m "TrustWork Australia: sync project"
fi

git branch -M main 2>/dev/null || true

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin https://github.com/dsbrave/trustwork.git
else
  git remote add origin https://github.com/dsbrave/trustwork.git
fi

echo "A enviar para origin/main…"
if ! git push -u origin main; then
  echo "Push falhou. Se o GitHub já tem commits (ex. README), corre uma vez:"
  echo "  git pull origin main --rebase --allow-unrelated-histories"
  echo "  git push -u origin main"
  exit 1
fi
echo "Concluído."
