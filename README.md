# 🎬 API Cinema

API RESTful para gerenciamento de um sistema de cinema, desenvolvida com **NestJS**, **Prisma ORM** e **PostgreSQL**. Permite gerenciar filmes, salas, sessões, ingressos e itens de lanchonete, com documentação interativa via Swagger.

## 📋 Sumário

- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Modelo de dados](#-modelo-de-dados)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração do banco de dados](#-configuração-do-banco-de-dados)
- [Executando o projeto](#-executando-o-projeto)
- [Documentação da API (Swagger)](#-documentação-da-api-swagger)
- [Endpoints](#-endpoints)
- [Testes](#-testes)
- [Scripts disponíveis](#-scripts-disponíveis)

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) 11 — framework Node.js para aplicações server-side
- [Prisma ORM](https://www.prisma.io/) 7 — mapeamento objeto-relacional
- [PostgreSQL](https://www.postgresql.org/) — banco de dados relacional
- [Swagger](https://swagger.io/) (`@nestjs/swagger`) — documentação interativa da API
- [class-validator](https://github.com/typestack/class-validator) / [class-transformer](https://github.com/typestack/class-transformer) — validação e transformação de DTOs
- [Jest](https://jestjs.io/) — testes unitários e end-to-end
- TypeScript

## 📁 Estrutura do projeto

```
src/
├── filme/        # CRUD de filmes
├── sala/         # CRUD de salas de exibição
├── sessao/       # CRUD de sessões (filme + sala + horário)
├── ingresso/     # CRUD de ingressos (venda de assentos)
├── lanche/       # CRUD de itens da lanchonete
├── prisma/       # Módulo e serviço de acesso ao Prisma Client
├── generated/    # Prisma Client gerado automaticamente (não editar)
├── app.module.ts
└── main.ts       # Ponto de entrada da aplicação

prisma/
├── schema.prisma # Definição do modelo de dados
├── seed.ts       # Script de populamento inicial do banco
└── migrations/   # Histórico de migrações do banco
```

Cada módulo de recurso (`filme`, `sala`, `sessao`, `ingresso`, `lanche`) segue o padrão do NestJS: `controller` (rotas), `service` (regras de negócio), `dto` (validação de entrada) e `entities` (tipagem de saída).

## 🗂 Modelo de dados

| Entidade | Descrição | Relacionamentos |
|---|---|---|
| **Filme** | Título, gênero, descrição, classificação indicativa, duração e data de estreia | Possui várias `Sessões` |
| **Sala** | Nome (único), capacidade e tipo (2D, 3D, IMAX etc.) | Possui várias `Sessões` |
| **Sessão** | Data/hora, preço, idioma e formato de exibição | Pertence a um `Filme` e uma `Sala`; possui vários `Ingressos` |
| **Ingresso** | Nome do cliente, CPF, assento e forma de pagamento | Pertence a uma `Sessão` |
| **Lanche** | Nome, preço, categoria, descrição e disponibilidade | Independente |

Regras de integridade importantes:
- Uma `Sala` não pode ter duas sessões no mesmo horário (`@@unique([salaId, dataHora])`).
- Um mesmo assento não pode ser vendido duas vezes na mesma sessão (`@@unique([sessaoId, assento])`).
- Exclusão de `Filme` ou `Sala` remove em cascata as `Sessões` associadas; exclusão de `Sessão` remove os `Ingressos` associados.

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [PostgreSQL](https://www.postgresql.org/) instalado e em execução (local ou remoto)
- npm

## 📦 Instalação

```bash
git clone https://github.com/Arthur-Cardoso0/Trabalho-P2-Web
cd API-cinema
npm install
```

## 🔧 Configuração do banco de dados

1. Copie o arquivo de exemplo de variáveis de ambiente:

```bash
cp .env.example .env
```

2. Edite o `.env` com a string de conexão do seu PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/vosso_cinema"
```

3. Rode as migrações para criar as tabelas no banco:

```bash
npx prisma migrate dev
```

4. (Opcional) Popule o banco com dados iniciais:

```bash
npm run seed
```

## ▶️ Executando o projeto

```bash
# modo desenvolvimento (com watch)
npm run start:dev

# modo padrão
npm run start

# modo produção (requer build prévio)
npm run build
npm run start:prod
```

A aplicação sobe por padrão em `http://localhost:3000`.

## 📖 Documentação da API (Swagger)

Com a aplicação em execução, a documentação interativa fica disponível em:

```
http://localhost:3000/api
```

Nela é possível visualizar e testar todos os endpoints diretamente pelo navegador.

## 🔌 Endpoints

Todos os recursos seguem o mesmo padrão CRUD (`POST`, `GET`, `GET /:id`, `PATCH /:id`, `DELETE /:id`).

### Filmes — `/filmes`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/filmes` | Cadastrar um novo filme |
| GET | `/filmes` | Listar todos os filmes |
| GET | `/filmes/:id` | Buscar um filme pelo ID |
| PATCH | `/filmes/:id` | Atualizar um filme |
| DELETE | `/filmes/:id` | Remover um filme |

### Salas — `/salas`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/salas` | Cadastrar uma nova sala |
| GET | `/salas` | Listar todas as salas |
| GET | `/salas/:id` | Buscar uma sala pelo ID |
| PATCH | `/salas/:id` | Atualizar uma sala |
| DELETE | `/salas/:id` | Remover uma sala |

### Sessões — `/sessoes`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/sessoes` | Cadastrar uma nova sessão |
| GET | `/sessoes` | Listar todas as sessões |
| GET | `/sessoes/:id` | Buscar uma sessão pelo ID |
| PATCH | `/sessoes/:id` | Atualizar uma sessão |
| DELETE | `/sessoes/:id` | Remover uma sessão |

### Ingressos — `/ingressos`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/ingressos` | Emitir um novo ingresso |
| GET | `/ingressos` | Listar todos os ingressos |
| GET | `/ingressos/:id` | Buscar um ingresso pelo ID |
| PATCH | `/ingressos/:id` | Atualizar um ingresso |
| DELETE | `/ingressos/:id` | Cancelar um ingresso |

### Lanches — `/lanches`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/lanches` | Cadastrar um novo lanche |
| GET | `/lanches` | Listar todos os lanches |
| GET | `/lanches/:id` | Buscar um lanche pelo ID |
| PATCH | `/lanches/:id` | Atualizar um lanche |
| DELETE | `/lanches/:id` | Remover um lanche |

### Exemplo de requisição — criar um filme

```http
POST /filmes
Content-Type: application/json

{
  "titulo": "Interestelar",
  "genero": "Ficção Científica",
  "descricao": "Uma viagem pelo espaço e pelo tempo.",
  "classificacao": "14 anos",
  "duracao": 169,
  "estreia": "2014-11-07"
}
```

### Exemplo de requisição — criar uma sessão

```http
POST /sessoes
Content-Type: application/json

{
  "dataHora": "2024-05-10T20:00:00",
  "preco": 35.0,
  "idioma": "Português",
  "formato": "2D",
  "filmeId": 1,
  "salaId": 1
}
```

## 🧪 Testes

```bash
# testes unitários
npm run test

# testes unitários em modo watch
npm run test:watch

# cobertura de testes
npm run test:cov

# testes end-to-end
npm run test:e2e
```

## 📜 Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run build` | Compila o projeto para `dist/` |
| `npm run start` | Inicia a aplicação |
| `npm run start:dev` | Inicia em modo desenvolvimento com hot-reload |
| `npm run start:debug` | Inicia em modo debug |
| `npm run start:prod` | Inicia a versão compilada (produção) |
| `npm run lint` | Executa o ESLint com correção automática |
| `npm run format` | Formata o código com Prettier |
| `npm run seed` | Popula o banco de dados com dados iniciais |
| `npm run test` | Executa os testes unitários |
| `npm run test:e2e` | Executa os testes end-to-end |

## 📄 Licença

Este projeto está sob a licença UNLICENSED (uso privado/não licenciado).
