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

#### 2.1.2) Change `prefix` in angular.json

```
projects.projectName.prefix: myPrefix
```
