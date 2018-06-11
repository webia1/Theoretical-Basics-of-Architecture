# Visual Studio Code

## User Settings

```javascript
{
    // ich habe 4K zu Hause, daher 1.7, im Office reicht 1.12
    "window.zoomLevel": 1,
    "editor.tabCompletion": true,
    "instantmarkdown.autoCloseServerAndBrowser": false,
    "emmet.showSuggestionsAsSnippets": true,
    "typescript.useCodeSnippetsOnMethodSuggest": true,    
    "emmet.includeLanguages": {"vue-html": "html"},
    // hier verwende ich git-bash als Standard Terminal
     "terminal.integrated.shell.windows": "C:\\Users\\UserName\\AppData\\Local\\Programs\\Git\\bin\\bash.exe",
    // Wenn ich mit mehreren Fenstern arbeite, möchte ich 
    // dass die Zeilen umgebrochen angezeigt werden, sie werden
    // nicht umgebrochen (nur die Darstellung)
    "editor.wordWrap": "on",
    "editor.wordWrapColumn": 80,
    "html.format.wrapLineLength": 80,
    // Tabsize 2 Leerzeichen würden meiner Ansicht nach reichen
    "editor.tabSize": 2,
    "prettier.tabWidth": 2,
    // Unix Line Endings LF
    "files.eol": "\n",
    // Ein Leerzeichen am Ende
    "files.insertFinalNewline": true,
    // So kann Vetur+Prettier den Code automatisch formatieren
    "vetur.format.defaultFormatter.css": "prettier",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "prettier",
    "vetur.format.defaultFormatter.postcss": "prettier",
    "vetur.format.defaultFormatter.scss": "prettier",
    "vetur.format.scriptInitialIndent": false,
    "vetur.format.styleInitialIndent": false,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "all",
    // Damit die IDE nicht schreit wenn ich Kommentare
    // in JSON-Dateien habe, bei der Produktion
    // werden sie automatisch rausgefischt.
    "files.associations": {
        "*.json": "jsonc",
        ".eslintrc": "jsonc"
    },
    // Damit IDE bei ES6 nicht schreit 
    "jshint.options": {
        "esversion": 6,
        "asi": true,
    },
    // Andere eigene Einstellungen
    "explorer.sortOrder": "default",
    "update.enableWindowsBackgroundUpdates": true,
    "debug.allowBreakpointsEverywhere": true,
    "debug.inlineValues": true,
    "html.suggest.angular1": false,
    "terminal.integrated.fontSize": 14,
    "telemetry.enableCrashReporter": false,
    "telemetry.enableTelemetry": false,
    "git.autofetch": true,
    "git.autorefresh": true,
    "eslint.alwaysShowStatus": false,
    "eslint.autoFixOnSave": true,
    "workbench.colorTheme": "Cobalt2",
    "editor.fontFamily": "'Fira Code',Consolas, 'Courier New', monospace",
    "editor.fontSize": 14,
    "editor.fontLigatures": true,
    "editor.formatOnPaste": true,
    "editor.lineHeight": 20,
    "editor.minimap.enabled": true,
    "editor.mouseWheelZoom": true,
    "editor.detectIndentation": true,
    "editor.rulers": [
        80,
        120
    ],
    "editor.multiCursorModifier": "alt",
    "workbench.iconTheme": "vscode-great-icons",
    "git.enableSmartCommit": true,
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": true,
        "suppressShowKeyBindingsNotice": true
    },
    "gitlens.keymap": "chorded",
    "workbench.activityBar.visible": true,
    // enhanced Markup settings
    "markdown-preview-enhanced.enableCriticMarkupSyntax": true,
    "gitlens.historyExplorer.enabled": true,
    "gitlens.codeLens.scopes": [
        "document",
        "containers",
        "blocks"
    ],
    "gitlens.statusBar.reduceFlicker": true,
    "explorer.confirmDelete": false,
}

```
