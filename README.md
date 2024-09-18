# in.orbit

## Descrição

O **in.orbit** é uma aplicação desenvolvida durante o evento **Next Level Week (NLW)** da Rocketseat, que tem como objetivo auxiliar no cadastro e acompanhamento de hábitos e metas a serem cumpridas. A aplicação é dividida em um backend para a gestão dos dados e um frontend para a interface com o usuário.

## Tecnologias Utilizadas

### Backend (Pasta `server`)
- **Node.js**: Ambiente de execução para o JavaScript no servidor.
- **Fastify**: Framework web rápido e eficiente.
- **Drizzle**: Abstração para banco de dados.
- **Docker**: Utilizado para criar o ambiente de desenvolvimento e banco de dados.
- **Postman**: Ferramenta para testar e enviar requisições para a API.

### Frontend (Pasta `web`)
- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.

## Requisitos

Para rodar a aplicação localmente, certifique-se de ter os seguintes requisitos instalados:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes que vem com o Node.js)
- **Docker** (para gerenciar o banco de dados e os containers)
- **Docker Compose** (para orquestrar os serviços Docker)
- **Postman** (opcional, para testes de API)

## Configurando para execução
No terminal siga os comandos
- **git clone https://github.com/arturevs/in-orbit-nlw.git**
- **cd in-orbit-nlw**
- **cd server**
- **npm install**
- **docker-compose up**
- **cd ../web**
- **npm install**
- **npm run dev**

O frontend estará disponível em http://localhost:5173

## Estrutura do Projeto

```bash
├── server    # Arquivos do Backend
├── web       # Arquivos do Frontend
└── README.md


