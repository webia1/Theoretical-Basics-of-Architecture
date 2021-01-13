# MacOS Related

## Install Brew

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

## Add Homebrew to PATH (zsh) - shows then only ~ without user@machine
    
    echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/user/.zprofile
    eval $(/opt/homebrew/bin/brew shellenv)
    
## Beatiful Zsh - OhMyZsh

    # INSTALL
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

    

## Change Default Shell (if an older apple machine)

New machines have all zsh already!.

    chsh -s /bin/zsh
    chsh -s /bin/bash
    ...
    
## Turn Off Screen if connected to external monitors

    sudo nvram boot-args="iog=0x0"  // OFF
    sudo nvram -d boot-args         // ON AGAIN    

## Show Hidden Files in Finder

    defaults write com.apple.finder AppleShowAllFiles YES
    killall Finder
    
## Change Screenshots Folder

    mkdir ~/Documents/Screenshots
    defaults write com.apple.screencapture location ~/Documents/Screenshots
    killall SystemUIServer
    
## Show the Path in the Finder Title Bar

    defaults write com.apple.finder _FXShowPosixPathInTitle -bool true; 
    killall Finder

## icu4c

    icu4c is keg-only, which means it was not symlinked into 
    /usr/local, because macOS provides libicucore.dylib 
    (but nothing else).

    If you need to have icu4c first in your PATH run:
      echo 'export PATH="/usr/local/opt/icu4c/bin:$PATH"' >> ~/.zshrc
      echo 'export PATH="/usr/local/opt/icu4c/sbin:$PATH"' >> ~/.zshrc
    
    For compilers to find icu4c you may need to set:
      export LDFLAGS="-L/usr/local/opt/icu4c/lib"
      export CPPFLAGS="-I/usr/local/opt/icu4c/include"

## zshrc

    # redefine prompt_context for hiding user@hostname
    prompt_context () { }
