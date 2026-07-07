# 🛍️ Catálogo Interativo

Aplicação web desenvolvida com **Next.js** e **React**, criada como trabalho da disciplina de Desenvolvimento Web (P2). O projeto simula um catálogo de produtos com busca, favoritos e página de detalhes, além de páginas institucionais (Sobre e Contato).

## 📋 Sobre o projeto

O site permite ao usuário navegar por um catálogo de produtos, pesquisar por nome, curtir os itens de que mais gostou e visualizar os detalhes de cada produto em uma página dedicada. O objetivo é demonstrar, na prática, conceitos como roteamento por arquivos (App Router), componentização em React, gerenciamento de estado com hooks e estilização com CSS Modules.

## ✨ Funcionalidades

- **Home** – página inicial de apresentação com chamada para o catálogo.
- **Catálogo de Produtos** – lista de produtos com busca em tempo real por nome.
- **Página de Detalhes** – rota dinâmica (`/produtos/[id]`) com as informações completas de cada produto.
- **Curtir Produto** – botão de "like" por produto, com contagem persistida no `localStorage` do navegador.
- **Contato** – formulário com validação de campos obrigatórios e mensagem de confirmação de envio.
- **Sobre** – página institucional descrevendo o projeto e as tecnologias utilizadas.

## 🛠️ Tecnologias utilizadas

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- CSS Modules
- ESLint

## 📁 Estrutura do projeto

```
Trabalho-P2-Web/
├── app/
│   ├── page.js               # Página inicial (Home)
│   ├── layout.js              # Layout raiz (Header + Footer)
│   ├── produtos/
│   │   ├── page.js             # Catálogo de produtos (busca)
│   │   ├── Produtos.js          # Dados (mock) dos produtos
│   │   └── [id]/page.js         # Detalhes de um produto específico
│   ├── contato/page.js        # Formulário de contato
│   └── sobre/page.js          # Página sobre o projeto
├── components/
│   ├── Header/                # Menu de navegação
│   ├── Footer/                # Rodapé
│   ├── Searchbar/              # Campo de busca de produtos
│   ├── Productcard/            # Card de exibição de produto
│   └── Likebutton/             # Botão de curtir produto
├── public/images/             # Imagens dos produtos
└── styles/global.css          # Estilos globais
```

## 🚀 Como executar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Scripts disponíveis

| Comando         | Descrição                                    |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Inicia o servidor em modo de desenvolvimento   |
| `npm run build` | Gera a build de produção                       |
| `npm run start` | Inicia o servidor com a build de produção      |
| `npm run lint`  | Executa o ESLint no projeto                    |

## 🖥️ Páginas

| Rota                | Descrição                              |
|---------------------|------------------------------------------|
| `/`                  | Página inicial                           |
| `/produtos`          | Catálogo de produtos com busca            |
| `/produtos/[id]`     | Detalhes de um produto específico         |
| `/contato`           | Formulário de contato                     |
| `/sobre`             | Sobre o projeto                          |

## 👤 Autor

Trabalho desenvolvido para a disciplina de Desenvolvimento Web (P2).
