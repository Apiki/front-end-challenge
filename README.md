# Apiki 🚀

> Aplicação React de Apiki.

[![CI](https://github.com/seu-usuario/control361/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/seu-usuario/control361/actions/workflows/ci-cd.yml)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](#docker)
[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/)

---

## 📋 Sumário

- [Apiki 🚀](#apiki-)
  - [📋 Sumário](#-sumário)
  - [🧐 Sobre](#-sobre)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🛠️ Pré-requisitos](#️-pré-requisitos)
  - [⚡ Instalação](#-instalação)
  - [🔑 Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [🧑‍💻 Desenvolvimento Local](#-desenvolvimento-local)
  - [🐳 Uso com Docker](#-uso-com-docker)
    - [Dockerfile.dev (desenv)](#dockerfiledev-desenv)
    - [Docker Compose](#docker-compose)
  - [💻 CI/CD](#-cicd)
  - [🚀 Deploy no Vercel](#-deploy-no-vercel)
  - [🗂️ Estrutura de Pastas](#️-estrutura-de-pastas)

---

## 🧐 Sobre

Este repositório contém a aplicação **Apiki**, desenvolvida em React + TypeScript, gerenciador global de estado com Zustand, formulários com React Hook Form + Zod.

---

## ✨ Funcionalidades

- Listagem das notícias.
- Visualização de detalhes de cada notícia.

---

## 🛠️ Pré-requisitos

- **Node.js** >= 18
- **npm** >= 8
- **Docker** (para ambiente conteinerizado)
- **Docker Compose** (opcional para dev local)
- **Conta no Vercel** (para deploy)

---

## ⚡ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/GefersonLopes/front-end-challenge
   cd front-end-challenge
   ```
2. Instale as dependências:
   ```bash
   npm i
   ```
3. Crie um arquivo `.env` na raiz, copiando de `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Ajuste as variáveis de ambiente conforme necessário. (Deixei já o padrão que será funcional)

---

## 🔑 Variáveis de Ambiente

As seguintes variáveis devem estar definidas no seu `.env`:

```dotenv
VITE_BASE_URL_API_CLIENT=https://blog.apiki.com/wp-json/wp/v2/
VITE_CELLPHONE_NUMBER=5571996063783
VITE_LINKEDIN_ACCOUNT=algeferson
```

## 🧑‍💻 Desenvolvimento Local

Execute em modo de desenvolvimento com Vite e hot-reload:

```bash
npm run dev        # serve http://localhost:5173/
```

Ou via Docker Compose:

```bash
docker compose up --build
#Após build, acesse http://localhost:5173
```

---

## 🐳 Uso com Docker

### Dockerfile.dev (desenv)

- **EXPOSE** 5173
- Comando: `CMD ["npm", "run", "dev"]`

### Docker Compose

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - ./:/app
      - /app/node_modules
    ports:
      - "5173:5173"
    environment:
      - VITE_BASE_URL_API_CLIENT={{ VITE_BASE_URL_API_CLIENT }}
      - VITE_CELLPHONE_NUMBER={{ VITE_CELLPHONE_NUMBER }}
      - VITE_LINKEDIN_ACCOUNT={{ VITE_LINKEDIN_ACCOUNT }}
```

Para rodar:

```bash
docker compose up --build
```

---

## 💻 CI/CD

Fluxo configurado via GitHub Actions:

1. **CI**
   - Checkout do código
   - Setup Node.js
   - Cache npm
   - `npm ci`, `npm run lint`, `npm test`, `npm run build`
   - Upload de artefato `build/`

2. **Docker Build & Push** (on push em `main`)
   - Download do build
   - `docker build -f Dockerfile` → imagem tageada por commit SHA + `latest`
   - Push no Docker Hub (opcional)

3. **Deploy no Vercel**
   - Ação `amondnet/vercel-action@v20` usando `vercel.json` e secrets:
     - VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID

Arquivo: `.github/workflows/ci-cd.yml`

---

## 🚀 Deploy no Vercel

O deploy utiliza Docker no Vercel, via `vercel.json`:

```json
{
  "version": 2,
  "builds": [{ "src": "Dockerfile", "use": "@vercel/docker" }],
  "routes": [{ "src": "/(.*)", "dest": "/" }]
}
```

Defina as mesmas variáveis de ambiente no painel Vercel (Production & Preview).

---

## 🗂️ Estrutura de Pastas

```
Apiki/
├── .env.example
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
├── package.json
├── public/
└── src/
    ├── components/
    ├── hooks/
    ├── pages/
    ├── store/
    └── utils/
```
