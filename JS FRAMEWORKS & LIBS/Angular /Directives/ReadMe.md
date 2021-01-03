# Angular Directives (~German)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Basis Stichworte](#basis-stichworte)
  - [Attributdirektive](#attributdirektive)
  - [Strukturdirektive](#strukturdirektive)
- [Eigene Directive](#eigene-directive)
- [Attribute Directives (Details)](#attribute-directives-details)
  - [Host Bindings](#host-bindings)
    - [Ein Beispiel](#ein-beispiel)
  - [Zugriff mittels `ElementRef`](#zugriff-mittels-elementref)
    - [Beispiele](#beispiele)
      - [Console.log `ElementRef.nativeElement`](#consolelog-elementrefnativeelement)
      - [Changing CSS Class & InnerHTML](#changing-css-class-innerhtml)
  - [HostListener](#hostlistener)
    - [Beispiel](#beispiel)
  - [Renderer2](#renderer2)
- [Structure Directives (Details)](#structure-directives-details)

<!-- /code_chunk_output -->

## Basis Stichworte

- `CSS-Selektor` &rarr; `DOM-Element` oder `DOM-ELement-Attribute`
- `Host-Element` &rarr; Ein Element, das über eine Direktive verfügt
- `Direktive`
  - `Componente` (auch eine Art Direktive mit einem Template)
  - `Attributdirektive`
  - `Strukturdirektive`

### Attributdirektive

Beispiel: `[ngClass]`, sie ändern das Aussehen oder Verhalten

```html
<div [ngClass]="myClass">WhatEverText</div>
```

### Strukturdirektive

Beispiel: `*ngIf, ngFor,..`, sie ändern die Struktur des DOM

```html
<div *ngIf="showText">WhatEverText</div>
```

## Eigene Directive

Am besten mittels Angular-CLI generieren lassen:

```bash
ng g d neu
```

Folgende Dateien werden automatisch generiert bzw. aktualisiert:

```bash
CREATE src/app/neu.directive.spec.ts (212 bytes)
CREATE src/app/neu.directive.ts (135 bytes)
UPDATE src/app/app.module.ts (459 bytes)
```

Auszug aus aktualisierter `src/app/app.module.ts`:

```diff
+import { NeuDirective } from './neu.directive';

 @NgModule({
   declarations: [
     AppComponent
+    NeuDirective
   ],
   imports: [
     BrowserModule,
```

Generierte Direktive hat den Inhalt:

```typescript
//src/app/neu.directive.ts

import { Directive } from '@angular/core';

@Directive({
  selector: '[appNeu]',
})
export class NeuDirective {
  constructor() {}
}
```

Die Verbindung zu einem Element geschieht:

```html
<div appNeu>WhatEverText</div>
```

Alle Möglichkeiten für eine Übergabe der Werte an die Direktive aus der aktuellen Komponente:

```html
<div appNeu="value">WhatEverText</div>
<div [appNeu]="expression">WhatEverText</div>
<div *appNeu="expression">WhatEverText</div>
```

Einlesen der Werte in der Direktive über `@Input() Dekorator`:

```typescript
//src/app/neu.directive.ts

import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appNeu]',
})
export class NeuDirective {
  @Input() appNeu: any;
  constructor() {}
}
```

**Wichtig:** Mittels Input Dekoratoren können auch beliebige Attribute **eingelesen** werden, u.A. auch `class`. Selbst wenn man den Wert diese Klasse in der Direktive ändern kann, hat es keine Auswirkung auf die Darstellung im DOM. Das muss man wissen! Um DOM Eigenschaften modifizieren können sind weitere Methoden (siehe weiter unten: HostBinding bzw. ElementRef) erfoderlich.

```html
<div
  [myDirective]="expression"
  someAttribute="foo"
  class="myClass"
></div>
```

**Wichtig**: Alles andere als directive muss initialisiert werden, sei es vorerst mit leeren Werten!

```typescript

@Input() myDirective: any;
@Input() someAttribute: string = '';
@Input() class: string = '';
```

**Das Komplette Beispiel:**

```html
<div appNeu="Title" class="cTitle" someAttr="foo">Hi</div>
```

```typescript
import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appNeu]',
})
export class NeuDirective implements OnInit {
  @Input() appNeu: any;
  @Input() someAttr: string = '';
  @Input() class: string = '';
  constructor() {}

  ngOnInit() {
    console.log('appNeu: ', this.appNeu);
    console.log('someAttr: ', this.someAttr);
    console.log('class: ', this.class);
  }
}
```

**console.log:**

```bash
appNeu:  Title     neu.directive.ts:13
someAttr:  foo     neu.directive.ts:14
class:  cTitle     neu.directive.ts:15
```

## Attribute Directives (Details)

Zugriff auf das Hostelement (z.B. div) erfolgt

- über `Host Bindings` oder
- über `ElementRef`

### Host Bindings

Während @Input() nur lesen kann, kann @HostBinding auch verändern.

| Binding              | Name                |
| -------------------- | ------------------- |
| `[appNeu]`           | Property Binding    |
| `[style.color]`      | Style Binding       |
| `[class.MyCSSClass]` | (CSS) Class Binding |
| `[attr.href]`        | Attribute Binding   |

#### Ein Beispiel

```html
<div appNeu="Title" class="cTitle">Hi</div>
```

```typescript
import { Directive, Input, OnInit, HostBinding } from '@angular/core';
@Directive({
  selector: '[appNeu]',
})
export class NeuDirective implements OnInit {
  @Input() appNeu: any;
  @HostBinding() class: string = '';
  constructor() {}
  ngOnInit() {
    this.class = 'cTitle2';
  }
}
```

```css
.cTitle {
  font-size: 3rem;
}

.cTitle2 {
  font-size: 1rem;
}
```

### Zugriff mittels `ElementRef`

ElementRef ermöglicht den direkten Zugriff auf das DOM-Element.

`ElementRef.nativeElement` &rarr; `document.getElementBy..`

> **Permitting direct access to the DOM can make your application more vulnerable to XSS attacks.** Carefully review any use of ElementRef in your code. For more detail, see the [Security Guide](https://g.co/ng/security).

> **USE WITH CAUTION**
> Use this API as the last resort when direct access to DOM is needed. Use templating and data-binding provided by Angular instead. Alternatively you can take a look at Renderer2 which provides API that can safely be used even when direct access to native elements is not supported.

> Relying on direct DOM access creates tight coupling between your application and rendering layers which will make it impossible to separate the two and deploy your application into a web worker.

#### Beispiele

For all Element-Properties and Methods see: https://developer.mozilla.org/en-US/docs/Web/API/Element

Some of them:

- `nativeElement.innerHTML`
- `nativeElement.className`
- `nativeElement.setAttribute(name, value)`
- `nativeElement.removeAttribute(attrName)`

##### Console.log `ElementRef.nativeElement`

```typescript
import { Directive, Input, OnInit, ElementRef } from '@angular/core';
@Directive({
  selector: '[appNeu]',
})
export class NeuDirective implements OnInit {
  @Input() appNeu: any;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log(this.el.nativeElement);
  }
}
```

**console.log:**

```html
<div
  _ngcontent-lrq-c17=""
  appneu="Title"
  class="cTitle"
  ng-reflect-app-neu="Title"
>
  Hi
</div>
```

##### Changing CSS Class & InnerHTML

```typescript
import { Directive, Input, OnInit, ElementRef } from '@angular/core';
@Directive({
  selector: '[appNeu]',
})
export class NeuDirective implements OnInit {
  @Input() appNeu: any;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML = 'Hello World';
    this.el.nativeElement.className = 'cTitle2';
  }
}
```

### HostListener

Hostlistener können wir einsetzen, wenn wir auf die Events des Host-Elements reagieren möchten.

> Liste aller Events: https://developer.mozilla.org/en-US/docs/Web/API/Element#Events

#### Beispiel

```html
<div appNeu>Hi</div>
```

```typescript
import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[appNeu]',
})
export class NeuDirective {
  @HostListener('click') myOnclickHandler() {
    console.log('Clicked!');
  }
}
```

### Renderer2

[See other document here.](../DOM/ReadMe.md#renderer2)

## Structure Directives (Details)

Die Unterscheidung zwischen Attribut- & Struktur Direktiven sind für mich nicht klar genug abgegrenzt, da ich ich auch mit Attribut-Direktiven mittels ElementRef DOM-Struktur verändern kann. Aber da wollen wir nicht so pingelig sein.

Die Strukturdirektiven unterscheiden sich zumindest in der Namensgebung, Angular stellt immer ein Stern davor.

<table>

  <tr><td><strong>Bindings</strong></td></tr>  
  <tr><td><code>*ngFor="let e of elements"</code></td></tr>  
  <tr><td><code>*ngIf="condition"</code></td></tr>  
  <tr><td>
<code>[ngSwitch]="someVariable"   </br>
*ngSwitchCase="matchValue1" </br>
*ngSwitchCase="matchValue2" </br>
`ngSwitchDefault` 
</code></td></tr>  
  
</table>
