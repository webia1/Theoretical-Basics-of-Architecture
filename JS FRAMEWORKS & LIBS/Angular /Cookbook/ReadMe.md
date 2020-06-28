# Angular Cookbook

## Customizing Angular-Flex-Layout Breakpoints

[>> Modifying existing ones](https://stackblitz.com/edit/angular-fxlayout-custom-breakpoints?file=app%2Fcustom-breakpoints.ts)

[>> Adding new ones](https://github.com/angular/flex-layout/wiki/Breakpoints)

## Working with DateFns

### Installing (also pipes &rarr; ngx-date-fns)

```bash
npm i -S date-fns
npm i -S ngx-date-fns
```
import { DateFnsModule } from 'ngx-date-fns';

```bash
@NgModule({
  imports: [
    // (...)
    DateFnsModule.forRoot()
  ]
})
```

### Format Dates with DateFns (date-fns)

Import necessary parts:

```ts
import { format, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';
```

Define desired formats

```ts
const DATE_FORMATS = {
  SHORT: 'd .MMM yyyy',
  MIDDLE: 'd .MMM yyyy, HH:mm, E',
};
```
Use it in your component

```ts
// e.g. timestamp as "yyyy-MM-dd'T'HH:mm:ss.SSS";
let dayString = '2019-06-20 19:46:20.187'
let parsedDayString =  parseISO(dayString);
let myLocalDate = format(parsedDayString, DATE_FORMATS.SHORT, { locale: de });
```
### Time Distance with DateFns (date-fns)

```ts
// import necessary parts
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';

// then somewhere in your component

const startTime = Date.now();
// do something meanwhile and then

const itTook = formatDistanceToNow(
    startTime,
    { includeSeconds: true, locale: de }
);

```

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

