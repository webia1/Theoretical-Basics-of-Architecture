# Deploying An Angular Project to GitHub.io -  e.g. `regex.github.io` 

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Create a Repository](#create-a-repository)
- [Build Angular Project](#build-angular-project)
- [Deploy Static Pages](#deploy-static-pages)
- [Navigate to the Webpage](#navigate-to-the-webpage)

<!-- /code_chunk_output -->

## Create a Repository

`regex.github.io`

## Build Angular Project

```bash
ng build --prod --base-href 'https://webia1.github.io/regex.github.io/'
```

## Deploy Static Pages

```bash
cd dist/regex
git init
git add .
git commit -m "INITIAL COMMIT"
git remote add origin https://github.com/webia1/regex.github.io.git
git branch -M master
git push -u origin master
```

## Navigate to the Webpage

<https://webia1.github.io/regex.github.io/>
