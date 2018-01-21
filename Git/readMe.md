# Git

## Show Global Configration Path

    git config --list --show-origin

## Remove ignored files from remote repository

    git rm -r --cached .
    git add .
    git commit -am "Removed ignored files"
    git push
    
## Create remote Github repository from Commandline

    git remote add origin https://github.com/webia1/vueDb.git
    git push -u origin master    
    
## Store Git Credentials on Mac in Key permanently

    git config --global credential.helper cache
    git config --global credential.helper 'cache --timeout=3600'
    
## Set MacOs KeyChain as Git credential store 

   git config --global credential.helper osxkeychain    