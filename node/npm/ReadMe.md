# NPM/Node

## NPM

### Where does npm install packages?

`npm root [-g]`

### Show globally installed packages

`npm list -g --depth=0`

### Installing directly from github

`npm install https://github.com/repo/npm_module.git --save`

## Node

### Using Environment Variables

#### Within Scripts and Shell Commands

```shell
process.env.EXAMPLE_URI; // e.g. within index.js
```
```
EXAMPLE_URI=mongodb://localhost:27107/foo node index.js
```
#### With '.env' File

```shell
yarn add dotenv
touch .env
vi .env // add EXAMPLE_URI=mongodb://localhost:27107/foo
```

```js
require('dotenv').config(); // e.g. within index.js
```
```
node index.js
```
