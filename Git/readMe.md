# Git

## Remove ignored files from remote repository

    git rm -r --cached .
    git add .
    git commit -am "Removed ignored files"
    git push
    
## Create remote Github repository from Commandline

    git remote add origin https://github.com/webia1/vueDb.git
    git push -u origin master    