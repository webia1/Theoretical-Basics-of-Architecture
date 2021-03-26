# RgRx

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Installation](#installation)
  - [`ng add @ngrx/store@latest`](#ng-add-ngrxstorelatest)
    - [`ng add @ngrx/schematics`](#ng-add-ngrxschematics)
      - [`angular.json` added lines](#angularjson-added-lines)
      - [`package.json` added line](#packagejson-added-line)
      - [Both steps above could be performed manually](#both-steps-above-could-be-performed-manually)
  - [Or manually](#or-manually)
    - [Importing StoreModule `app.module.ts`](#importing-storemodule-appmodulets)
- [Simple Store.ts](#simple-storets)
  - [`/src/app/static/types.ts`](#srcappstatictypests)
  - [`/src/app/dynamic/store.ts`](#srcappdynamicstorets)

<!-- /code_chunk_output -->

## Installation

### `ng add @ngrx/store@latest`

```shell
ng add @ngrx/store@latest
```

#### `ng add @ngrx/schematics`

```shell
ng add @ngrx/schematics@latest

  Installing packages for tooling via npm.
  Installed packages for tooling via npm.
  Do you want to use @ngrx/schematics as the default collection? Yes
  UPDATE angular.json (3772 bytes)
```

##### `angular.json` added lines

```diff
+ "cli": {
+    "defaultCollection": "@ngrx/schematics"
+  }
```

##### `package.json` added line

```diff
  "devDependencies": {

+    "@ngrx/schematics": "^11.0.1",

  }
```

##### Both steps above could be performed manually

```shell
npm i @ngrx/schematics -D
ng config cli.defaultCollection @ngrx/schematics
```

### Or manually

```shell
npm i @ngrx/store -S
```

#### Importing StoreModule `app.module.ts`

```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// EBIA

+ import { StoreModule } from '@ngrx/store';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
+     StoreModule.forRoot({}),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
```

## Simple Store.ts

Create new files, e.g.

### `/src/app/static/types.ts`

```typescript
export interface State {
  count: number;
}
```

### `/src/app/dynamic/store.ts`

```typescript
import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
} from '@ngrx/store';

import { State } from '../static/types';

export const increment = createAction('[Counter] Increment');

export const countReducer = createReducer(
  0,
  on(increment, (count) => count + 1),
);

export const reducers: ActionReducerMap<State> = {
  count: countReducer,
};
```
