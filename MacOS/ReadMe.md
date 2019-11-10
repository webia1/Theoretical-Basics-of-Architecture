# MacOS Related

## Change Default Shell

    chsh -s /bin/zsh
    chsh -s /bin/bash
    ...

## Show Hidden Files in Finder

    defaults write com.apple.finder AppleShowAllFiles YES
    
## Change Screenshots Folder

    mkdir ~/Documents/Screenshots
    defaults write com.apple.screencapture location ~/Documents/Screenshots
    killall SystemUIServer
    
## Show the Path in the Finder Title Bar

    defaults write com.apple.finder _FXShowPosixPathInTitle -bool true; 
    killall Finder
    
