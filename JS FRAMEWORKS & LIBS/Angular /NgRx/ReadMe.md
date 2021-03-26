# RgRx

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing StoreModule](#importing-storemodule)

<!-- /code_chunk_output -->

## Getting Started

### Installation

```shell
npm i @ngrx/store -S
```

### Importing StoreModule `app.module.ts`

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
