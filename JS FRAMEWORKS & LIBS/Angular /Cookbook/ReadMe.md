# Angular Cookbook

## Injecting Window Object

### Provide it

```ts
// app.module.ts  
providers: [
  { provide: 'MY_CLIENT_INFO', useFactory: getClientInfo },
],

// out of everything else
export declare const MY_CLIENT_INFO: InjectionToken<string>;
export function getClientInfo() {
  return window ? window : {};
}
```

### Create a Service

```ts
  
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientInfoService {
  private clientWindow: any;

  constructor(@Inject('MY_CLIENT_INFO') ci: Window) {
    this.clientWindow = ci ? ci : {};
  }

  get(props?: any) {
    const len = props.length ? props.length : 0;
    let value: any;
    if (len > 0) {
      value = this.clientWindow[props[0]];
      for (let i = 1; i < len; i++) {
        if (value) {
          value = value[props[i]];
        } else {
          return null;
        }
      }
      return value;
    } else {
      return null;
    }
  }

  getCertainProp(p: any) {
    return this.clientWindow[p] ? this.clientWindow[p] : null;
  }
}
```

### Inject and use it in your Component

```ts
constructor(private cis: ClientInfoService) {}

  ngOnInit() {
    const screen = this.cis.get(['screen']) as Screen;
    const language = this.cis.get(['navigator', 'language']);

    console.log(screen);
    console.log(language);

    this.ci.Screen = screen;
    this.ci.Language = language;
  }
  ngAfterViewChecked(): void {
    this.ci.Screen = this.cis.get(['screen']) as Screen;
    this.ci.Language = this.cis.get(['navigator', 'language']);
  }
```

### Or Inject it directly without Service

```ts
import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  isDevMode,
  ChangeDetectorRef,
  HostListener,
  Inject,
  AfterViewChecked,
} from '@angular/core';
...
 constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('WINDOW') private window: Window, ... // Attention it is a String!
```

