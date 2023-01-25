# todo-vue
Sample todo app built with the Vue 3 and Vite. More details on component testing in Nightwatch using Vite available on the [Component testing](https://nightwatchjs.org/guide/component-testing/introduction.html) guide page on Nightwatch docs.

[![Nightwatch Tests](https://github.com/nightwatchjs-community/todo-vue/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/nightwatchjs-community/todo-vue/actions/workflows/node.js.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1aa38269-6c09-44a5-86c9-8c1527efd2d0/deploy-status)](https://app.netlify.com/sites/todo-vue3-vite/deploys)

Live preview: https://todo-vue3-vite.netlify.app/

This project uses [ES Modules](https://nodejs.org/api/esm.html). Node 12+ required.

## Project setup
```
npm install
```

### Run locally
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://vitejs.dev/config/).

## Run tests
Tests are written using [Nightwatch 2](https://nightwatchjs.org/) and cover both component testing and end-to-end testing. 

For component testing, the [@nightwatch/vue](https://github.com/nightwatchjs/nightwatch-plugin-vue) plugin is used, which can start/stop the Vite server automatically. 

Start the Vite dev server:
```
npm run dev
```

### Run component tests
This will run a sample component test for the `ToDoForm.vue` component in Chrome:

```
npm test
```

### Run end-to-end tests
This will run the end-to-end tests in Chrome:

```
npm run test-e2e
```

### Headless mode

To run the tests in headless mode (for example to run them in Github Actions), add the `-- --headless` argument to the `npm` task:

```
npm run test-e2e -- --headless
```
