use below command to create a eslint file it will ask some question about how we want to create the es-lint file and what will be the default rules and what will be the file type .js,json,YAML

    npm init @eslint/config

to get es-lint error in vs code install a extension named "ESLint"


to ignore file from linting add the file path in ".eslintignore" because it's a spacial file and use by eslint to know which file and folder it's has to ignore


extends section contain all the rules-set library from that we are inheriting the rules and we can overwrite these rules as well.

example: eslint:recommended, plugin:@typescript-eslint/recommended




the rules section contain all the rules the we have overwrite or added

to run es-lint against the project run below command

    "eslint ."

to fix es-lint error automatically run below command

    "eslint --fix"




Q.how eslint identify rule volition

answer. eslint use AST (abstract syntax tree) to scan the code and then run it's matcher against the AST to find code volition

below are some tool the use AST
    webpack
    babel.js
    linters
    minifiers
    syntax highlighters

checkout for more info on AST -> https://astexplorer.net/ 

