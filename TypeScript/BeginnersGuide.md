# Beginner's Guide

## Setup

### Install TypeScript

```javascript
npm i typescript -g
tsc -v // Version 2.9.2
```

### Transpile & watch

```javascript
tsc index.ts
tsc --outFile file.js file.ts
tsc @args.txt // Insert command line options and files from a file
tsc -w --out bundle.js index.ts // out DEPRECATED. Use --outFile instead
tsc -w --outFile bundle.js index.ts
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

### Install typescript & ts-node locally

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

# TypeScript Definition/Declaration Files 

If you want to see some examples at the very beginning, [click here](http://www.typescriptlang.org/docs/handbook/declaration-files/templates.html).  

## Library Structures 

### Global Libraries

When looking at the code of a global library, you’ll usually see:

- Top-level `var` statements or function `declarations`
- One or more assignments to `window.someName`
- Assumptions that DOM primitives like `document` or `window` exist

You won’t see:

- Checks for, or usage of, module loaders like require or define
- CommonJS/Node.js-style imports of the form var fs = require("fs");
- Calls to define(...)
- Documentation describing how to require or import the library

Because it’s usually easy to turn a global library into a UMD library, very few popular libraries are still written in the global style. However, libraries that are small and require the DOM (or have no dependencies) may still be global.

### Modular Libraries 

Some libraries only work in a module loader environment. For example, because express only works in Node.js and must be loaded using the CommonJS require function.

ECMAScript 2015 (also known as ES2015, ECMAScript 6, and ES6), CommonJS, and RequireJS have similar notions of importing a module. In JavaScript CommonJS (Node.js), for example, you would write:

```javascript
var fs = require("fs");
```

In TypeScript or ES6, the import keyword serves the same purpose:

```javascript
import fs = require("fs");
```

You’ll typically see modular libraries include one of these lines in their documentation:

```javascript
var someLib = require('someLib');
```

or 

```javascript
define(..., ['someLib'], function(someLib) {

});
```
