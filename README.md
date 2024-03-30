# Vue 3 Boiler Plate

## Description

This project is a template for Vue.js 3 applications with integrated Pinia for state management and Tailwind CSS for styling. It also includes examples of mixing, plugins, global properties, and Vue Router for handling private and public routes.

## Features

- **Vue.js 3**: Utilizes the latest version of Vue.js for building reactive user interfaces.
- **Pinia**: Provides a robust and simple store management solution for Vue.js applications.
- **Mixins**: Demonstrates how to use mixins to share common functionality across Vue components.
- **Plugin**: Shows how to create and use plugins within a Vue.js application.
- **Global Property**: Illustrates the use of global properties in Vue.js applications.
- **Vue Router**: Implements Vue Router for managing private and public routes in the application.
- **Tailwind CSS**: Integrates Tailwind CSS for rapid and customizable styling of the application.

## Usage

1. Clone the repository:

```
git clone https://github.com/JoneCoder/vue3-boiler-plate.git
```

2. Navigate to the project directory:

```
cd vue3-boiler-plate/
```

3. Install dependencies:

```
yarn install
```

4. Start the development server:

```
yarn dev
```

5. Access the application in your browser at `http://localhost:5173`.

## Directory Structure

    .
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── mixins
    │   ├── router
    │   ├── stores (Pinia Storage)
    │   ├── views
    │   │   └── layouts
    │   │   └── pages  
    |   └── App.vue
    |   └── main.js
    ├── .env
    ├── index.html
    ├── jsconfig.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── yarn.lock

    2 directories, 8 files

- **src/**
    - **assets/**: Contains static assets such as images or fonts.
    - **components/**: Contains Vue components.
    - **mixins/**: Contains Vue.js mixins.
    - **plugins/**: Contains Vue.js plugins.
    - **router/**: Contains Vue Router configurations.
    - **stores/**: Contains Pinia store modules.
    - **views/**: Contains Vue views or pages.

## Configuration

- **Vue Router**: Configure your routes in the `router/index.js` file. Define private and public routes as needed.
- **Pinia**: Define your store modules in the `store/` directory and register them in the `store/index.js` file.
- **Tailwind CSS**: Customize Tailwind CSS configurations in the `tailwind.config.js` file to suit your styling needs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.