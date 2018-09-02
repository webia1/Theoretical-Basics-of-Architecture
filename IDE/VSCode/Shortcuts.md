# Shortcuts

## Sub-word navigation

```json
{ "key": "ctrl+alt+right",       "command": "cursorWordPartRight",
                                    "when": "textInputFocus" },
{ "key": "ctrl+shift+alt+right", "command": "cursorWordPartRightSelect",
                                    "when": "textInputFocus" },
{ "key": "ctrl+alt+left",        "command": "cursorWordPartStartLeft",
                                    "when": "textInputFocus" },
{ "key": "ctrl+shift+alt+left",  "command": "cursorWordPartStartLeftSelect",
                                     "when": "textInputFocus" },
{ "key": "ctrl+alt+backspace",   "command": "deleteWordPartLeft",
                                    "when": "textInputFocus && !editorReadonly" },
{ "key": "ctrl+alt+delete",      "command": "deleteWordPartRight",
                                    "when": "textInputFocus && !editorReadonly" },
```