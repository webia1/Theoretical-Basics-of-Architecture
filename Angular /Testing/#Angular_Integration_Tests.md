#Angular Test API

[API Overview](https://angular.io/api)

## @angular/core/testing
### async  
### ComponentFixture  
### ComponentFixtureAutoDetect  
### ComponentFixtureNoNgZone  
### discardPeriodicTasks  
### fakeAsync  
### flush  
### flushMicrotasks  
### getTestBed  
### inject  
### InjectSetupWrapper  
### MetadataOverride  
### resetFakeAsyncZone  
### TestBed  
### TestComponentRenderer  
### TestModuleMetadata  
### tick  
### withModule

## @angular/common/testing
### MockLocationStrategy  
### SpyLocation

## @angular/common/http/testing
### HttpClientTestingModule  
### HttpTestingController  
### RequestMatch  
### TestRequest

## @angular/http/testing
### MockBackend  
### MockConnection

## @angular/router/testing
### RouterTestingModule  
### setupTestingRouter  
### SpyNgModuleFactoryLoader

## @angular/platform-browser


## @angular/platform-browser/testing
### BrowserTestingModule  
### platformBrowserTesting

## @angular/platform-browser-dynamic/testing
### BrowserDynamicTestingModule  
### platformBrowserDynamicTesting

## @angular/platform-server/testing
### platformServerTesting  
### ServerTestingModule

## @angular/animations/browser/testing
### MockAnimationDriver  
### MockAnimationPlayer

# Code Examples
## Angular CLI Default 

```javascript
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
});
```

## Basic Imports
Following Imports are used in many of Tests, but notice Angular CLI does not have all.

```
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
```

## Differences between initial & generated

### Testing Properties

**Angular CLI Initial AppComponent**

```javascript
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
  it('spec description', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // the two lines above are repetead in every it()
    // the following expects are in 2 different it()-blocks
    expect(app).toBeTruthy();
    expect(app.title).toEqual('app');
  }));
```

**Generated WhateverComponent**

If we use Angular CLI and Webpack there is no need to `compileComponents()`.

```javascript
describe('WhateverComponent', () => {
  let component: WhateverComponent;
  let fixture: ComponentFixture<WhateverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhateverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

We could **simplify** that above and use only one `beforeEach()`

```javascript
describe('WhateverComponent', () => {
  let component: WhateverComponent;
  let fixture: ComponentFixture<WhateverComponent>;

  beforeEach(() => {
	  TestBed.configureTestingModule({
      declarations: [ WhateverComponent ]
    })
    fixture = TestBed.createComponent(WhateverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```


### Testing Property and Class Bindings

Angular CLI uses a different approach in its initial AppComponent:

```
it('should render title in a h1 tag', async(() => {
    
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // detectChanges is only here
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
    .toContain('Welcome to app!');
    
}));
``` 

In a - by ng later - generated component there are 2 Variables in the `describe()`-Block:

```
let component: WhateverComponent;
let fixture: ComponentFixture<WhateverComponent>;
```
and `fixture.detectChanges()` is located in `beforeEach()` Block:

```
fixture = TestBed.createComponent(WhateverComponent);
component = fixture.componentInstance;
fixture.detectChanges();
```

There are also other possibilities to access DOM & Co as used in initial AppComponent.

First Step is importing `By`:

```
import { By } from '@angular/platform-browser';
```

then use it

```
let debugElement = fixture.debugElement.query(By.css('some-class'));
let element: HTMLElement = de.nativeElement;

expect(element.innerText).toContain(1);

```

Compare it with the Angular CLI's initial approach:

```
const fixture = TestBed.createComponent(AppComponent);
fixture.detectChanges(); 
const compiled = fixture.debugElement.nativeElement;
expect(compiled.querySelector('h1').textContent)
    .toContain('Welcome to app!');

```

**First Approach: Set nativeElement and query**

```
const compiled = fixture.debugElement.nativeElement;
compiled.querySelector('some-selector').textContent
```

**Second Approach: Query and set nativeElement**

```
let debugElement = fixture.debugElement.query(By.css('some-class'));
let element: HTMLElement = de.nativeElement;
expect(element.innerText).toContain(1);
```

**Todo**: What is faster ? 

**Notice**: `textContent` is not a standard

**Notice**: If some properties are modified in the test suite, run `fixture.detectChanges()`

**Another Approach is accessing attributes or classes directly:**

```
let debugElement = fixture.debugElement.query(By.css('some-class'));

expect(debugElement.attributes['some-attr']).toBeTruthy 
// or
expect(debugElement.classes['some-class']).toBeTruthy
// or 
expect(debugElement.styles['some-style']).toBeTruthy
```

### Testing Event Bindings





