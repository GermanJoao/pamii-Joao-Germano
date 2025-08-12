Guia de Configuração e Desenvolvimento
<img src="https://pbs.twimg.com/profile_images/1876765399687049216/kLaAM_SN_400x400.jpg" alt="Avatar" width="100" align="right">
1️⃣ Configurando o computador da escola com o GitHub
Abra o Git Bash.

Configure seu usuário do GitHub:

bash
Copiar
Editar
git config --global user.name "SeuNomeNoGitHub"
git config --global user.email "SeuEmailDoGitHub"
Confira se está tudo certo:

bash
Copiar
Editar
git config --list
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
Entre na pasta do projeto:

bash
Copiar
Editar
cd seu-repositorio
2️⃣ Criando um projeto Expo
Instale o Node.js (versão LTS) em nodejs.org.

Instale o Expo CLI:

bash
Copiar
Editar
npm install -g expo-cli
Crie o projeto:

bash
Copiar
Editar
npx create-expo-app nome-do-projeto
cd nome-do-projeto
(Opcional) Instale dependências úteis:

bash
Copiar
Editar
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install @react-native-async-storage/async-storage
Inicie o app:

bash
Copiar
Editar
npx expo start
