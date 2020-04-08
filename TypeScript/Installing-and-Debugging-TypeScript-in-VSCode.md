# Installing and Debugging TypeScript in VSCode

## Setup

### Install TypeScript

```bash {cmd=true}
npm i typescript -g
tsc -v // Version 3.0.3
```

### Transpile & watch

```javascript
tsc index.ts
tsc --outFile file.js file.ts
tsc @args.txt // Insert command line options and files from a file
tsc -w --out bundle.js index.ts // out DEPRECATED. Use --outFile instead
tsc -w --outFile bundle.js index.ts
```

### ts-node watch witch nodemon

1) package.json

```js
{
  "name": "ts-node-watch-with-nodemon",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "ts-node index.ts",
    "watch": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "typescript": "^3.8.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.2",
    "ts-node": "^8.8.2"
  }
}
```

2) nodemon.json

```js
{
  "watch": ["index.ts"],
  "ignore": ["./**/*.spec.ts"],
  "exec": "ts-node ./index.ts"
}

```


#### tsc --lib

```javascript
 'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017'
 'es2018' 'esnext' 'dom' 'dom.iterable' 'webworker'
 'scripthost' 'es2015.core' 'es2015.collection'
 'es2015.generator' 'es2015.iterable' 'es2015.promise'
 'es2015.proxy' 'es2015.reflect' 'es2015.symbol'
 'es2015.symbol.wellknown' 'es2016.array.include'
 'es2017.object' 'es2017.sharedmemory' 'es2017.string'
 'es2017.intl' 'es2017.typedarrays' 'es2018.intl'
 'es2018.promise' 'es2018.regexp' 'esnext.array'
 'esnext.asynciterable'
```

### Create tsconfig.json

```javascript
tsc --init
```

## Debugging TypeScript in Visual Studio Code

### Install Typescript & ts-node locally

```
npm init -y
npm install typescript --save // dependency
npm install ts-node --save-dev // dev-dependency
```

### Edit `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch current file w/ ts-node",
      "protocol": "inspector",
      "args": ["${relativeFile}"],
      "cwd": "${workspaceRoot}",
      "runtimeArgs": ["-r", "ts-node/register"],
      "internalConsoleOptions": "openOnSessionStart"
    }
  ]
}
```

## New Approach: Using [`gts`](https://www.npmjs.com/package/gts)

### 1) Automatically

    npm install -g npx
    npx gts init

### 2) Manually: Prepare TypeScript for Browser

#### package.json

```json
{
  "name": "ts-examples",
  "version": "0.0.0",
  "description": "",
  "main": "build/src/index.js",
  "types": "build/src/index.d.ts",
  "files": [
    "build/src"
  ],
  "license": "Apache-2.0",
  "keywords": [],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "check": "gts check",
    "clean": "gts clean",
    "compile": "tsc -p .",
    "fix": "gts fix",
    "prepare": "npm run compile",
    "pretest": "npm run compile",
    "posttest": "npm run check"
  },
  "devDependencies": {
    "gts": "^1.1.0",
    "typescript": "~3.5.0",
    "@types/node": "^10.0.3"
  }
}

```

#### tsconfig.json

```
{
  "extends": "./node_modules/gts/tsconfig-google.json",
  "compilerOptions": {
    "experimentalDecorators": true,
    "rootDir": ".",
    "outDir": "build"
  },
  "include": ["src/**/*.ts", "test/**/*.ts"]
}
```


