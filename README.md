# Guia de Configuração e Desenvolvimento

<img src="https://pbs.twimg.com/profile_images/1876765399687049216/kLaAM_SN_400x400.jpg" alt="Avatar" width="400" align="center">

## 1️⃣ Configurando o computador da escola com o GitHub

1. Abra o **Git Bash**.  
2. Configure seu usuário do GitHub:  
   ```bash
   git config --global user.name "SeuNomeNoGitHub"
   git config --global user.email "SeuEmailDoGitHub"
   ```
3. Confira se está tudo certo:  
   ```bash
   git config --list
   ```
4. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
5. Entre na pasta do projeto:  
   ```bash
   cd seu-repositorio
   ```

---

## 2️⃣ Criando um projeto Expo

1. **Instale o Node.js** (versão LTS) em [nodejs.org](https://nodejs.org/).  
2. Instale o Expo CLI:  
   ```bash
   npm install -g expo-cli
   ```
3. Crie o projeto:  
   ```bash
   npx create-expo-app nome-do-projeto
   cd nome-do-projeto
   ```
4. Inicie o app:  
   ```bash
   npx expo start
   ```
