## Projeto de Consulta de Cidades e Previsão do tempo

Este projeto é uma aplicação web desenvolvida em Next.js 13 que permite buscar informações de cidades brasileiras e exibe as condições climáticas de cada cidade nos proximos 6 dias. O projeto também possui um sistema de login utilizando JWT para autenticação de usuários.

-**📋 Funcionalidades**

-Busca por cidade: Busca informações de cidades por CEP, utilizando a API brasilapi.com.br.

-Exibição de clima: Exibe as informações climáticas (temperatura mínima e máxima) para a cidade pesquisada.

-Sistema de login: Login utilizando autenticação com JWT. Ao fazer login, o nome do usuário é exibido na página de perfil.

-**🛠️ Tecnologias Utilizadas**

-Next.js 13 (React).

-Context API para gerenciamento de estado global.

-API Externa: brasilapi.com.br para consulta de cidades e informações climáticas.

-API Fake: Servidor Hapi.js rodando localmente para simular o login e gerar tokens JWT

## 🚀 Como Rodar o Projeto

**Pré-requisitos**

-Node.js (versão >= 16.0.0)

-npm

-Next.js 13

## 🔑 Login
Utilize o seguinte login para autenticar no sistema:

Email: jorge@abreu.com.br

Senha: abobrinha

## Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MaryChriss/CP5-Frontend.git 

2. **Instale as dependecias:**
   ```bash
   cd CP5-Frontend
   npm install

3. **Instale as dependências do projeto:**
   ```bash
   npm install

4.  **Execute o projeto:**
    ```bash
     npm run dev
