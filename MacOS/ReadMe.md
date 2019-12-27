# MacOS Related

## Change Default Shell

    chsh -s /bin/zsh
    chsh -s /bin/bash
    ...
    
## Turn Off Screen if connected to external monitors

    sudo nvram boot-args="iog=0x0"  // OFF
    sudo nvram -d boot-args         // ON AGAIN    

## Show Hidden Files in Finder

    defaults write com.apple.finder AppleShowAllFiles YES
    
## Change Screenshots Folder

    mkdir ~/Documents/Screenshots
    defaults write com.apple.screencapture location ~/Documents/Screenshots
    killall SystemUIServer
    
## Show the Path in the Finder Title Bar

    defaults write com.apple.finder _FXShowPosixPathInTitle -bool true; 
    killall Finder
    
