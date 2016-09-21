# reactStarter
React boiler plate starter


## Setup(Windows)

Install [NodeV6](https://nodejs.org/en/)

Install [Git](https://git-scm.com/download/win)

Optional Install: [Git Dekstop](https://desktop.github.com/)

Optional Install: [Atom](https://atom.io/)
* Recommended Addons
	* [file-icons](https://atom.io/packages/file-icons) or  [seti-icons](https://atom.io/packages/seti-icons)
	* [Seti UI](https://atom.io/themes/seti-ui)
 	* [Monokai Seti Syntax](https://atom.io/themes/monokai-seti)
	* [minimap](https://atom.io/packages/minimap)
	* [highlight-selected](https://atom.io/packages/highlight-selected)
	* [pigments](https://atom.io/packages/pigments)
 	* [color-picker](https://atom.io/packages/color-picker)
	* [git-plus](https://atom.io/packages/git-plus)
 	* [merge-conflicts](https://atom.io/packages/merge-conflicts)
 	* [autocomplete-modules](https://atom.io/packages/autocomplete-modules)
	* [react](https://atom.io/packages/react)
 	* [language-babel](https://atom.io/packages/language-babel)
	* [atom-beautify](https://atom.io/packages/atom-beautify)
 	* [auto-detect-indentation](https://atom.io/packages/auto-detect-indentation)
	* [todo-show](https://atom.io/packages/todo-show)

## Getting Started
* Create New Repo
* Pull down this repo
	* Copy everything into new repo except /.git
	* Change name and repo url in packages.json

#### In Terminal/Powershell/Bash(left click repo in Git Desktop >> 'open in git shell'):

```bash
npm install
npm install -g webpack
npm install -g webpack-dev-server
npm install -g gh-pages

```

## Running
```bash
npm start
```
[localhost:8080/webpack-dev-server/#](http://localhost:8080/webpack-dev-server/#)
* changes will update automatically

## Deploying to gh-pages
```bash
npm run gh
```
* may have to delete /node_modules/gh-pages/.cache if url mismatch error occurs

## Git Workflow
1. Make changes on dev branch
2. Commit changes to dev branch
3. Sync / git-push
4.  Create Pull Request
5. Assign reviewer
6. *IF REVIEWER - review file changes, make comments / merge