# Desenvolvimento Mobile - 2026.1

Repositório para a disciplina utilizando React Native e Expo, escrito em TypeScript.

## Sobre

Aplicativo mobile multiplataforma (iOS, Android e Web) desenvolvido com **React Native** e **Expo SDK 55** no contexto da disciplina de Desenvolvimento Mobile 2026/1.

- **Linguagem:** TypeScript
- **Framework:** React Native 0.83.2 + Expo ~55.0.5
- **Workflow:** Expo Managed + EAS (Expo Application Services)
- **Bundle ID:** `br.com.renanalencar.dm20261ts`

## Pré-requisitos

- Node.js >= 18
- npm (não usar yarn ou pnpm)
- Expo Go no dispositivo físico, ou simulador iOS/Android configurado localmente

## Instalação

```bash
npm install
```

## Executando o projeto

```bash
# Inicia o Metro bundler (menu interativo para escolher plataforma)
npm start

# Abre diretamente em uma plataforma específica
npm run android
npm run ios
npm run web
```

Após iniciar, escaneie o QR code com o aplicativo **Expo Go** (Android/iOS) ou pressione `i` / `a` no terminal para abrir no simulador.

## Estrutura do projeto

```
dm-2026-1-js/
├── index.js          # Ponto de entrada — registra o componente raiz no Expo
├── App.js            # Componente raiz da aplicação
├── components/       # Componentes reutilizáveis (.tsx)
├── assets/           # Ícones, splash screen e imagens estáticas
├── app.json          # Configuração do Expo (nome, slug, ícones, plataformas)
├── eas.json          # Perfis de build do EAS (development, preview, production)
└── package.json      # Dependências e scripts
```

## Dependências principais

| Pacote             | Versão   | Finalidade                     |
| ------------------ | -------- | ------------------------------ |
| `expo`             | ~55.0.5  | SDK principal do Expo          |
| `react`            | 19.2.0   | React core                     |
| `react-native`     | 0.83.2   | Runtime iOS e Android          |
| `react-native-web` | ^0.21.2  | Suporte à plataforma Web       |
| `expo-updates`     | ~55.0.12 | Atualizações OTA via EAS       |
| `expo-dev-client`  | ~55.0.11 | Dev client com módulos nativos |
