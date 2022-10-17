
# Vue 3 CSR App

## ![Vue3](https://img.shields.io/badge/Vue3-41B883?logo=vuedotjs&logoColor=364659) ![Vite](https://img.shields.io/badge/Vite-9e54f3?logo=vite&logoColor=f6c84c) ![Typescript](https://img.shields.io/badge/TypeScript-4377c0?logo=typescript&logoColor=ffffff) ![ESLint](https://img.shields.io/badge/ESLint-4f38bc?logo=eslint&logoColor=ffffff) ![StyleLint](https://img.shields.io/badge/StyleLint-black?logo=stylelint&logoColor=ffffff)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
  

## Project Setup

```sh
yarn install
```

### Create `.env.local` file based on `.env`
Update `VITE_APP_PORT` to fit the project number.
*e.g.: **PUX012**, `VITE_APP_PORT=3012`*

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/) & [Stylelint](https://stylelint.io/)

```sh
yarn lint
```

## Project Structure

### `/i18n` Translations

To create new translation languages, simply create a new file matching locale code
**e.g.:** `fr|en|en-GB|en-US.json`

Re run `yarn dev` to force compiler to parse again i18n files & detect locales
> Locales are automatically detected thanks to **@intlify/vite-plugin-vue-i18n/** at build time & when server starts, they are then stored in-memory and served throught an import alias handled by **vite**

### `/public` Public resources

> Public resources **are not compiled** at build time whereas asset ones are, for deeper explanations : check [this](https://vitejs.dev/guide/assets.html) 

**`/public/fonts`**
Every fonts used in the project

**`/public/images`**
Public served images

**`/public/meta`**
Meta assets like a *favicon* or any other *manifest*, *apple*|*android* icons etc ... They are usually included in some `<header />` `<meta />` tags

### `/src` Application code

> Work in progress ...