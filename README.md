# Ledger
### 🎬 🎥
_Implementing native array methods from scratch_

## Setup/Usage
Going through this setup will give you a preview of what it is like to work on a group projects.

1. Fork and clone repo
  - **Fork:** forking the repo will allow you to have a personal copy of the repo in which you can push your code and not disrupt the original codebase.
2. Open the `index.html` file in the root folder on your favorite browser.
  - The index page will show you the multiple tests you need to pass for each method.
3. The `src` folder will contain the files you will be working on.
4. As you start implementing your methods refresh the index page and you will start to see your tests pass (or fail _-be careful_).
5. Once you make progress make sure to commit and push your changes to your repo so your code is saved and you can show it off in the future.

As you work through your code always remember these important 3 questions when debugging:

>  - What do I expect this code to do?
>  - What is my code doing instead?
>  - What may be causing the disconnect?

When using `console.log` adding a string with labeling as the first argument will help out figuring out where in your codebase you are:

``` javascript
const dessert = [
  {
    name: 'Pumpkin Pie',
    holiday: 'Thanksgiving'
  },
  {
    name: 'Gingerbread',
    holiday: 'Christmas'
  },
  {
    name: 'Buche de Noel',
    holiday: 'Christmas'
  }
]

const christmasGoodies = dessert.filter(dessert => dessert.holiday === 'Christmas')

console.log('XMAS YUM YUM', christmasGoodies)
// There will automatically be a space added between
// 'XMAS YUM YUM' and whatever christmasGoodies represents
```

## Updates
As we learn more and more about higher order functions I will be updating the repo to include functions like `reduce` and `filter` which each having their own sets of tests. To make sure you are getting any updates made make sure to follow these steps:

1. Add a `remote` repo _syntax:_ `git remote add <name> <url>`
  - This will be a remote connection to my repo by running the following command:
  ``` bash
  git remote add upstream https://github.com/eyesore-/ledger
  ```
  - `upstream` will be the remote name.
2. To pull from original repo whenever there is changes you will now run:
``` bash
git pull upstream master
```
  - All new changes will be brought down from the original changes and if there are no changes to files that you have changed then there will be no merge conflicts
  - When working on a project you want to pull often to make sure that you have the most up to date codebase locally.
3. This will pull and merge the information into your local repo so it will ask you to write a `commit` message.
4. Once you write and save your `commit` message the new files will be merged into your local repo and you can start working on the method implementations.
---
**P.S.** Have fun! 🎈