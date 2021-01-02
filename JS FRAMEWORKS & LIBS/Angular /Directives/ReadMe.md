# Angular Directives (German)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Basis Stichworte](#basis-stichworte)
  - [Attributdirektive](#attributdirektive)
  - [Strukturdirektive](#strukturdirektive)
- [Eigene Directive](#eigene-directive)
- [Attribute Directives (Details)](#attribute-directives-details)

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

Alle Möglichkeiten für eine ÜBergabe der Werte an die Direktive aus der aktuellen Komponente:

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

**Wichtig:** Mittels Dekoratoren können beliebige Attribute eingelesen werden, u.A. auch `class`.

## Attribute Directives (Details)

Zugriff auf das Hostelement (z.B. div) erfolgt

- über `Host Bindings` oder
- über `ElementRef`

| Binding              | Name                |
| -------------------- | ------------------- |
| `[appNeu]`           | Property Binding    |
| `[style.color]`      | Style Binding       |
| `[class.MyCSSClass]` | (CSS) Class Binding |
| `[attr.href]`        | Attribute Binding   |
