# NPM/Node

## NPM

### Skip SSL Checks

    Use --insecure flag

### Build From Resource (Some gyp & co related errors)

    npm install --build-from-resource

### Where does npm install packages?

`npm root [-g]`

### Show globally installed packages

`npm list -g --depth=0`

### Installing directly from github

`npm install https://github.com/repo/npm_module.git --save`

### npm run pass parameter

    // Windows
    "args": "echo \"The value of --myParam is '%npm_config_myParam%'\""
    // Linux
    "args": "echo \"The value of --myParam is '${npm_config_myParam}'\""

### `npm` Command

```

Usage: npm <command>

where <command> is one of:

    access       npm access public [<package>]
                 npm access restricted [<package>]
                 npm access grant <read-only|read-write> <scope:team> [<package>]
                 npm access revoke <scope:team> [<package>]
                 npm access ls-packages [<user>|<scope>|<scope:team>]
                 npm access ls-collaborators [<package> [<user>]]
                 npm access edit [<package>]

    adduser      npm adduser [--registry=url] [--scope=@orgname] [--auth-type=legacy] [--always-auth]

                 aliases: login, add-user

    bin          npm bin [--global]

    bugs         npm bugs [<pkgname>]

                 alias: issues

    cache        npm cache add <tarball file>
                 npm cache add <folder>
                 npm cache add <tarball url>
                 npm cache add <git url>
                 npm cache add <name>@<version>
                 npm cache clean
                 npm cache verify

    completion   source <(npm completion)

    config       npm config set <key> <value>
                 npm config get [<key>]
                 npm config delete <key>
                 npm config list [--json]
                 npm config edit
                 npm set <key> <value>
                 npm get [<key>]

                 alias: c

    dedupe       npm dedupe

                 aliases: ddp, find-dupes

    deprecate    npm deprecate <pkg>[@<version>] <message>

    dist-tag     npm dist-tag add <pkg>@<version> [<tag>]
                 npm dist-tag rm <pkg> <tag>
                 npm dist-tag ls [<pkg>]

                 alias: dist-tags

    docs         npm docs <pkgname>
                 npm docs .

                 alias: home

    doctor       npm doctor

    edit         npm edit <pkg>[@<version>]

    explore      npm explore <pkg> [ -- <command>]

    get          npm get <key> <value> (See `npm config`)

    help

    help-search  npm help-search <text>

    init         npm init [--force|-f|--yes|-y]

    install
                 npm install (with no args, in package dir)
                 npm install [<@scope>/]<pkg>
                 npm install [<@scope>/]<pkg>@<tag>
                 npm install [<@scope>/]<pkg>@<version>
                 npm install [<@scope>/]<pkg>@<version range>
                 npm install <folder>
                 npm install <tarball file>
                 npm install <tarball url>
                 npm install <git:// url>
                 npm install <github username>/<github project>

                 aliases: i, isntall, add
                 common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]

    install-test
                 npm install-test [args]
                 Same args as `npm install`

                 alias: it

    link         npm link (in package dir)
                 npm link [<@scope>/]<pkg>[@<version>]

                 alias: ln

    logout       npm logout [--registry=<url>] [--scope=<@scope>]

    ls           npm ls [[<@scope>/]<pkg> ...]

                 aliases: list, la, ll

    outdated     npm outdated [[<@scope>/]<pkg> ...]

    owner        npm owner add <user> [<@scope>/]<pkg>
                 npm owner rm <user> [<@scope>/]<pkg>
                 npm owner ls [<@scope>/]<pkg>

                 alias: author

    pack         npm pack [[<@scope>/]<pkg>...]

    ping         npm ping
                 ping registry

    prefix       npm prefix [-g]

    profile      npm profile enable-2fa [auth-only|auth-and-writes]
                 npm profile disable-2fa
                 npm profile get [<key>]
                 npm profile set <key> <value>

    prune        npm prune [[<@scope>/]<pkg>...] [--production]

    publish      npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]

                 Publishes '.' if no argument supplied

                 Sets tag `latest` if no --tag specified

    rebuild      npm rebuild [[<@scope>/<name>]...]

                 alias: rb

    repo         npm repo [<pkg>]

    restart      npm restart [-- <args>]

    root         npm root [-g]

    run-script   npm run-script <command> [-- <args>...]

                 aliases: run, rum

    search       npm search [--long] [search terms ...]

                 aliases: s, se, find

    set          npm set <key> <value> (See `npm config`)

    shrinkwrap   npm shrinkwrap

    star         npm star [<pkg>...]
                 npm unstar [<pkg>...]

                 alias: unstar

    stars        npm stars [<user>]

    start        npm start [-- <args>]

    stop         npm stop [-- <args>]

    team         npm team create <scope:team>
                 npm team destroy <scope:team>
                 npm team add <scope:team> <user>
                 npm team rm <scope:team> <user>
                 npm team ls <scope>|<scope:team>
                 npm team edit <scope:team>

    test         npm test [-- <args>]

                 aliases: tst, t

    token        npm token list
                 npm token revoke <tokenKey>
                 npm token create [--read-only] [--cidr=list]


    uninstall    npm uninstall [<@scope>/]<pkg>[@<version>]... [--save-prod|--save-dev|--save-optional] [--no-save]

                 aliases: un, unlink, remove, rm, r

    unpublish    npm unpublish [<@scope>/]<pkg>[@<version>]

    update       npm update [-g] [<pkg>...]

                 aliases: up, upgrade, udpate

    version      npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
                 (run in package dir)
                 'npm -v' or 'npm --version' to print npm version (5.6.0)
                 'npm view <pkg> version' to view a package's published version
                 'npm ls' to inspect current package/dependency versions

    view         npm view [<@scope>/]<pkg>[@<version>] [<field>[.subfield]...]

                 aliases: v, info, show

    whoami       npm whoami [--registry <registry>]
                 (just prints username according to given registry)

npm <command> -h     quick help on <command>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\UserName\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config
```

## Node

### Using Environment Variables

#### Within Scripts and Shell Commands

```shell
process.env.EXAMPLE_URI; // e.g. within index.js
```

```
EXAMPLE_URI=mongodb://localhost:27107/foo node index.js
```

#### With '.env' File

```shell
yarn add dotenv
touch .env
vi .env // add EXAMPLE_URI=mongodb://localhost:27107/foo
```

```js
require('dotenv').config(); // e.g. within index.js
```

```
node index.js
```

## Trouble Shooting

### Brew node / npm Problem: Error: Cannot find module ‘semver’

    sudo rm -rf /usr/local/lib/node_modules
    sudo rm -rf ~/.npm
    brew uninstall –force node
    brew install node
