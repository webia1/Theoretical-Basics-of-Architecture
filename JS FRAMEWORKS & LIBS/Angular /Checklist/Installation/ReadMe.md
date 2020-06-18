# Angular Installation Checklist - OPINIONATED 

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
 
### During the installation

Routing &rarr; YES

Stylesheet Format &rarr; SCSS

### 2.1) Overwrite some standard settings

#### 2.1.2) Change `prefix` in angular.json

```
projects.projectName.prefix: myPrefix
```
