# Git

## Show Configration Paths

    git config --list --show-origin                                 // all config files
    git config --list --system --show-origin                        // system config files
    git config --list --show-origin | awk '{print $1}' | uniq       // show locations
    git config --list --local                                       // local config
    
    
    
## Log pretty only commit hashes and titles and save in a file

    git log --pretty="%h %s" > commits.txt
    

## Remove ignored files from remote repository

    git rm -r --cached .
    git add .
    git commit -am "Removed ignored files"
    git push
    
## Create remote Github repository from Commandline

    git remote add origin https://github.com/webia1/vueDb.git
    git push -u origin master  
    
## Set autocrlf to false

    git config --global core.autocrlf false
    
## Store Git Credentials on Mac in Key permanently

    git config --global credential.helper cache
    git config --global credential.helper 'cache --timeout=3600'
    
## Set MacOs KeyChain as Git credential store 

    git config --global credential.helper osxkeychain   
   
## Rename local branch

    git branch -m old_name new_name
    git branch -m new_name // if current branch
   
## Delete local branch   

    git branch -d branch_name
   
## Delete remote branch

    git push origin --delete branch_name
   
## Create/Connect to remote branch  

    git push --set-upstream origin desired_branch_name
