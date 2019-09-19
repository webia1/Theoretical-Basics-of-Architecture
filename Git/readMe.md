# Git

## First Steps

    git config --global --edit // OR The following below
    git config --global user.name mmustermann
    git config --global user.email "max.mustermann@example.com"

## .gitignore

    folder/file.txt
    generated/
    *.backup
    !someException.bak

## Show just the current branch

    git rev-parse --abbrev-ref HEAD
    git symbolic-ref --short HEAD
    git branch | grep '*'
    git branch --contains HEAD
    git name-rev --name-only HEAD
    cat .git/HEAD
    basename $(git symbolic-ref HEAD)
    git symbolic-ref HEAD | cut -d/ -f3-
    git branch | sed -n '/\* /s///p'
    git rev-parse --symbolic-full-name --abbrev-ref @{u}
    git branch | awk '/^\*/{print $2}'

## Git Pull and reset/ignore local changes

    git pull -s recursive -X theirs

## Sort remote branched by up-to-dateness (committer date)

    // [credits prof. narebski](https://stackoverflow.com/questions/5188320/how-can-i-get-a-list-of-git-branches-ordered-by-most-recent-commit)  
    git for-each-ref --sort=-committerdate refs/heads/
    # Or using git branch (since version 2.7.0)
    git branch --sort=-committerdate  # DESC
    git branch --sort=committerdate  # ASC
    
## Git Diff

    git diff --stat commit1 commit2
    git diff master --name-only     // list of different files
    git diff master --name-status   // and what kind of differences
    git diff master --stat          // my favorite
    git diff master --shortstat  
    
## Update Index

    git update-index --assume-unchanged
    
## Git Alias

    git config --global alias.today 'log --since=7am'  // git today

## Show Configration Paths

    git config --list --show-origin                                 // all config files
    git config --list --system --show-origin                        // system config files
    git config --list --show-origin | awk '{print $1}' | uniq       // show locations
    git config --list --local                                       // local config    
    
## Log pretty only commit hashes and titles and save in a file

    git log --pretty="%h %s" > commits.txt
    
## Log all modified changes by a certain user

### Short version
``` 
git log --no-merges --author="authorname" --name-only --pretty=format:"" | sort -u
```
### Long Version
```bash
git log --pretty="%H" --author="authorname" |
    while read commit_hash
    do
        git show --oneline --name-only $commit_hash | tail -n+2
    done | sort | uniq
```
    
## Remove ignored files from remote repository

    git rm -r --cached .
    git add .
    git commit -am "Removed ignored files"
    git push
    
## Undo add
    git reset --hard      // to last commit
    git rm --cached .     // undo add  
    
## Restore deleted file

First find the commit-id. That can help: 
    
    git log --diff-filter=D --summary

Then restore it. Please take notive of `~1` after commit-id

    git checkout commitid~1 .npmrc
    
You can also create an Alias [original post](https://stackoverflow.com/questions/953481/find-and-restore-a-deleted-file-in-a-git-repository?rq=1) (everything in one line):

    git config alias.restore '!f() { git checkout $(git rev-list -n 1 HEAD -- $1)~1 -- $(git diff --name-status $(git rev-list -n 1 HEAD -- $1)~1 | grep '^D' | cut -f 2); }; f'
    
then use it:

    git restore my_deleted_file

## Create and connect to remote repository

### Remote add & pull

    git remote add origin https://github.com/webia1/vueDb.git   // remote add
    git branch --set-upstream-to=origin/master master           // map origin/master to master (= remote/master)
    
### Set-upstream & push  

    git push --set-upstream origin desired_branch_name
    git push -u origin desired_branch_name   
    
### fatal: refusing to merge unrelated histories

     git pull origin master --allow-unrelated-histories
       
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
    git branch -D branch_name
   
## Delete remote branch

    git push origin --delete branch_name
    git push origin :branch_name

## Merge: Overwrite 

    git merge -X theirs source_branch_name

## Merge without checkout

    git fetch . dev:master // from dev -> into -> master

## Merge: Abort if conflicts (1)

    git merge --no-commit branch2
    git merge --abort
    
## Merge: Abort if conflicts (2)

    git format-patch $(git merge-base branch1 branch2)..branch2 --stdout | git apply --check -
    
## stash
    
    git stash --include-untracked
    git stash pop
    git stash list
    git stash pop stash@{1}

## tag

    git tag -a v0.1.0 -m "My Message"
    git push origin <tag_name> // or push all tags with the following command:
    git push --tags
        
## Correct last commit

    git commit --amend
    
## Status 

    git status --short // One liners 
    
## Reset/Revert/Checkout/..

    git reset HEAD .  
    git reset --hard // go to last commit
    git reset --hard commithash  // change back to a certain commit
    git checkout --force someBranch // local changes are away  
    
## Log (and relevant config settings)

    git log --oneline
    git log --graph
    git log --graph --oneline --decorate
    git log --summary -M90% | grep -e "^ rename"
    git log --follow a-modified-file.txt
    git config diff.renames true  // Rename Detection = true
    
## Blame

    git blame folder/filename.extension // shows what revision and author last modified each line of a file
   
## Check Integrity

    git fsck
   
## Create Branch from Commit Hash

    git branch desired-branch-name commithash
    
## Merge

    git mergetool --tool-help   // list of merge tools
    git reset --merge  // cancel merge
    git log --merges

## Statistics
    git shortlog -sn // top list
    git shortlog -sne // with Email Addresses
    git shortlog -sn --no-merges  // top list ohne merges
    
## Bisect

git bisect uses a binary search algorithm to find which commit in your project's history introduced a bug. You use it by first telling it a "bad" commit that is known to contain the bug, and a "good" commit that is known to be before the bug was introduced. Then git bisect picks a commit between those two endpoints and asks you whether the selected commit is "good" or "bad". It continues narrowing down the range until it finds the exact commit that introduced the change.

```shell
git bisect start
git bisect bad
git bisect good #commithash
```
the rest is interactive,..

## Miscellaneous

```
git log --oneline
git log --graph
git log --graph --oneline --decorate
git log --summary -M90% | grep -e "^ rename"
git log --follow a-modified-file.txt
git config diff.renames true  // Rename Detection = true
```
    
    
## ERRORS & SOLUTIONS

### Your configuration specifies to merge with the <branch name> from the remote, but no such ref was fetched
    
    Reason: Most probably the remote branch has been deleted.
    git config --global --unset-all remote.origin.url
    git fetch

### Git autocomplete on Windows Visual Studio Code integrated Terminal (VSCode/Cygwin/Git/Autocomplete)

#### Install Cygwin and following cygwin packages
    
    bash-completion
    bash-completion-devel
    
#### Add VSCode Settings

    "terminal.integrated.shell.windows": "C:\\Cygwin64\\bin\\bash.exe",
    "terminal.integrated.shellArgs.windows": ["/bin/xhere", "/bin/bash"],

#### Copy `.git-completion.bash` into your Cygwin Home

    C:\cygwin64\home\--myuserfolder--\

#### Edit your `.bash_profile` in your cygwin home folder and add

    if [ -e "${HOME}/.git-completion.bash" ] ; then 
    source "${HOME}"/.git-completion.bash 
    fi 



