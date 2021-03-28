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
- [Simple Store](#simple-store)
  - [First Example](#first-example)
    - [Overview](#overview)
    - [Types](#types)
    - [Action](#action)
    - [Reducers](#reducers)
    - [Action Reducer Mapping](#action-reducer-mapping)
    - [Store Configuration](#store-configuration)
    - [Store DevTools Configuration](#store-devtools-configuration)

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

## Simple Store

### First Example

#### Overview

<!-- prettier-ignore-start -->
| What                   | Where                                |
| ---------------------- | ------------------------------------ |
| **Store Types** |
| types                  | `/static/types.ts`                   |
| **Store Constituents** |
| actions                | `/dynamic/store/actions.ts`          |
| reducers               | `/dynamic/store/reducers.ts`         |
| action-reducer-mapping | `/dynamic/store/actionReducerMap.ts` |
| **Store Configuration** |
| `StoreModule.forRoot(actionReducerMap)` | `app.module.ts` |
| **Store DevTools Configuration** |
| `StoreDevtoolsModule.instrument({..}),` | `app.module.ts` |
<!-- prettier-ignore-end -->

#### Types

Type description of the store-state.

```typescript
export interface State {
  count: number;
}
```

#### Action

```ts
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const multiply = createAction(
  '[Counter] Multiply',
  props<{ factor: number }>(),
);
```

#### Reducers

```ts
import { createReducer, on } from '@ngrx/store';
import { increment, multiply } from './actions';

export const countReducer = createReducer(
  0,
  on(increment, (count) => count + 1),
  on(multiply, (count, { factor }) => count * factor),
);
```

#### Action Reducer Mapping

```ts
import { ActionReducerMap } from '@ngrx/store';
import { State } from '../../static/types';
import { countReducer } from './reducers';

export const actionReducerMap: ActionReducerMap<State> = {
  count: countReducer,
};
```

#### Store Configuration

```ts
// app.module.ts (excerpt)
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './dynamic/store/actionReducerMap';
// @NgModule -> imports
StoreModule.forRoot(actionReducerMap),
```

#### Store DevTools Configuration

Install `@ngrx/store-devtools` and add its schema:

```shell
npm i @ngrx/store-devtools -D
ng add @ngrx/store-devtools@latest
```

Following modification will be made automatically:

```ts
// app.module.ts (excerpt)
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// @NgModule -> imports
StoreDevtoolsModule.instrument({
  maxAge: 25,
  logOnly: environment.production,
}),
```
