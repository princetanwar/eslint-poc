use below command to create a eslint file it will ask some question about how we want to create the es-lint file and what will be the default rules and what will be the file type .js,json,YAML

    npm init @eslint/config

to get es-lint error in vs code install a extension named "ESLint"


to ignore file from linting add the file path in ".eslintignore" because it's a spacial file and use by eslint to know which file and folder it's has to ignore


to run es-lint against the project run below command

    "eslint ."  

    "." means start linting from the current folder you can pass some other folder path as well.

to fix es-lint error automatically run below command

    "eslint --fix ."



Q.how eslint identify rule volition

answer. eslint use AST (abstract syntax tree) to scan the code and then run it's matcher against the AST to find code volition

below are some tool the use AST.

```
    webpack
    babel.js
    linters
    minifiers
    syntax highlighters
```

checkout for more info on AST -> https://astexplorer.net/ 


some key things in es-lint file are below

eslint file contain a object with some key and value that defines how es-lint will work.


1. "env" section specify for which environment the code is written in these files like browser,node,test

    ```
    "env": {
        "browser": true,
        "es2021": true
        }
    ```

2. "extends" section contain all the rules-set library from that we are inheriting the rules and we can overwrite these rules as well in rules section.


    ```
    "extends": ["eslint:recommended"]
    ```


3. "parser" section is used to set which parser should be used by es-lint when building the AST.

    ```
     "parser": "babel-eslint"
    
    ```
    * babel-eslint parser is used when are project is using babel for transpilation of code.
    


4. "parserOptions" this section is used to configure the parser and the configuration is based on the parser we are using.

    ```
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
        }

    ```

5. "plugins" this section allow us to specify es-lint plugins that provide additional rules.

    ```

    "plugins": ["@typescript-eslint"],

    ```

6. "rules" this section is used to overrides the rules that are provided by other rule-set library and here we can configure rules are the provided by the library but they are currently off.

    ```
    "rules: [
        "quotes": ["error",2]
         ]

 *   key is the rule name and value is array that means if quotes is not double quotes then it is a error 
 * we can change the 2 to 1 means single quotes are allow
 * we can change error to warn or off. off will completely off the rule and warn mean it will give as a warning.

    ```

7. "ignore" specifies files and directories that es-lint should ignore during linting. alternatively we can you the .eslintignore file for the same.

    ```
    "ignorePatterns": ["temp.js", "**/vendor/*.js"],
    ```

8. "overrides" this section is used to overrides default configuration for some specific files

    ```
    "overrides": [{
        // for files matching this pattern
        "files": ["*.ts"],
        // following config will override "normal" config
        "parser": "babel-eslint",
        "parserOptions": {
            // override parser options
        },
        "plugins": [
            "@babel/plugin-proposal-optional-chaining"
        ],
        "rules": [
            // override rules
        ],
    },]
    ```