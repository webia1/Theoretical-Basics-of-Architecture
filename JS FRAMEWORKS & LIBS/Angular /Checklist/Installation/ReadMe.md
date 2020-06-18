# Angular Installation Checklist - OPINIONATED 

This list is for me to not forget an important step in repetetive installations.

## 1) Install `@angular/cli`

```bash
npm i -g @angular/cli@latest
```


## 2) Generate an Angular Project

```bash
ng new projectName 
```

 You can also set the prefix during the installation:
 
 ```bash
 ng new projectName --prefix=myPrefix
 ```
 
 My Own Approach
 
 ```bash
  ng new ebia -f -s --minimal --prefix=ebia --routing --skip-install --skip-tests --strict --style=scss
 ```
 
### During the installation

Routing &rarr; YES

Stylesheet Format &rarr; SCSS

### 2.1) Overwrite some standard settings

#### 2.1.1) Change `prefix` in angular.json

```
projects.projectName.prefix: myPrefix
```

#### 2.1.2) Set Basic Styles

..solves many future problems with certain UI-Libs:

```css
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

```

### 3) Generate a new component and use it as root

Own approach:

```bash
ng g c components/dashboard -is --skipTests
```

Edit `app-routing.module.ts` and set the root-route:

```ts
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
```
