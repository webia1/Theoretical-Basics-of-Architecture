# ES6 (=ES2015) Import & Exports

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [ES6 (=ES2015) Import & Exports](#es6-es2015-import--exports)
  - [Imports](#imports)
  - [Exports](#exports)
  - [Using ES2015 with Node](#using-es2015-with-node)
    - [Install Babel Presets](#install-babel-presets)
    - [Create .babelrc](#create-babelrc)
    - [Use babel-node](#use-babel-node)

<!-- /code_chunk_output -->

## Imports

```javascript
import name from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as alias from "module-name";
import defaultMember from "module-name";
import "module-name";
```

## Exports

```javascript
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // oder: var
export let name1 = …, name2 = …, …, nameN; // oder: var, const

export default expression;
export default function (…) { … } // oder: class, function*
export default function name1(…) { … } // oder: class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

## Using ES2015 with Node

### Install Babel Presets

```shell
npm install babel-preset-es2015 -D
```

### Create .babelrc

```json
{
  "presets": [
    "es2015"
  ]
}
```
### Use babel-node

```shell
babel-node index.js
```