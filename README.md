# Simple Typescript environment with functioning VSC breakpoints


### To use
Run `npm i` or `yarn`

In `package.json`, click `Debug` right above the `scripts` property. Select the only option. Now any future test runs will stop on breakpoints set in VSC!

If the `Debug` option is not showing, verify the following VSC setting exists `debug.javascript.codelens.npmScripts`


### Verified working on:
VSC Version: 1.62.3

Node.js: 14.16.0


### TODO:
- ~~set up test watcher script~~
- ~~add ci pipeline with github actions~~
- add linter config & add to ci pipeline