# Create-react-app personal config.
*This project exist because is it complicated to configurated your web-app, this repository is a starter-kit for quickly launch your app with all the tools you need.*
> **Note** - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Why a personal config to create-react-app ?
When you create a lot of projects big, medium or little you generally use "approximately" the same structure, although create-react-app contains everything that i need to quickly coding i found that a few things was missing. That's why you will find in this repo:

* Github config for your issues, pull requests.
* A circleci config.
* An editorconfig file.
* A personal eslint config.
* Prettier config.

You will also find these packages which i think are really commun to a lot of react project:

* Redux.
* React-redux.
* React-router-dom.
* Styled-components.
* Eslint.
* Prettier.

## Structure:
```bash
├── __tests__/	# folder for testing everything you want except UI test.
├── .circleci/	# Config your circleci.
├── .github/	# Files helper for your github repo
├── public/		# Folder for production code.
├── src/		# Contains development code.
	├── assets/		# Assets files.
		├── img/		# Hold your img.
	├── components	# Folder for your presentational components get data and display them no logic.
	├── container	# Hold you logic components opposite to components folder.
	└── appState.js	# Hold the data of your app use this file if you're using Redux or createContext API etc..
	└── index.js	# File entry point DO NOT DELETE.
	└── serviceWorker.js	# Helpful for PWA.
└── .editorconfig	# Config IDE
└── .eslintignore	# Eslint files, folders list to ignore.
└── .eslintrc.json	# Eslint config.
└── .npmrc		# Npm config.
└── .prettierrc	# Prettier config.
└── .gitignore	# Git files, folders list to ignore.
└── README.md	# README please :)
```

This is an idiomatic files structure :) of curse you're free to change, delete anything that you want be sure to change all the `import` concerned.

## Getting started:
**Script availables:**
* `start`.
* `test`.
* `build`.
* `eject`.

### Npm Start
To start your application use this command:
```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Npm Test
Launch Jest for testing all your `.test.js` files.
```
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Npm Run Build
Build your application
```
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Npm Run Eject
Eject all the configuration files.
```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

TODO: // Create the start coding section.
