<h1 align='center'> How Use EsLint </h1>

use below command to create a eslint file it will ask some question about how we want to create the es-lint file and what will be the default rules and what will be the file type .js,json,YAML OR directly create a eslint file and add your configuration.

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

   - babel-eslint parser is used when the project is using babel for transpilation of code.

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
   ```

- key is the rule name and value is array that means if quotes is not double quotes then it is a error
- we can change the 2 to 1 means single quotes are allow
- we can change error to warn or off. off will completely off the rule and warn mean it will give as a warning.

  ```

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

9. "root" By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, set this to `true` in a configuration in the root of your project.

   ```
   "root": true,
   ```

<h2 align='center'> Add Typescript Linting support </h2>

below are the step to add typescript support in the project.

1. install below required dependency.

   ```
   npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
   ```

2. create a .eslintrc.json file with below content.

   ```

   {
   root: true,
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
       project: true,
       tsconfigRootDir: __dirname,
   },
   plugins: ['@typescript-eslint'],
   }

   ```

   - parser: '@typescript-eslint/parser' tells ESLint to use the @typescript-eslint/parser package you installed to parse your source files.
     - This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.

   </br>

   - plugins: ['@typescript-eslint'] tells ESLint to load the @typescript-eslint/eslint-plugin package as a plugin.

     - This allows you to use typescript-eslint's rules within your codebase.

   </br>

   - extends: [ ... ] tells ESLint that your config extends the given configurations.
     - eslint:recommended is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
     - plugin:@typescript-eslint/recommended is our "recommended" config - it's similar to eslint:recommended, except it turns on TypeScript-specific rules from our plugin.

   </br>

   - root: true is a generally good ESLint practice to indicate this file is the root-level one used by the project and ESLint should not search beyond this directory for config files.

   </br>

   - parserOptions.project tells our parser how to find the TSConfig for each source file (true indicates to find the closest tsconfig.json for each source file)

   </br>

   - parserOptions.tsconfigRootDir tells our parser the absolute path of your project's root directory.

<h2 align='center'>Recommend Eslint for React + Typescript</h2>

1. run below commend to install required dependency

   ```
   npx install-peerdeps --dev eslint-config-airbnb

   npm i -D eslint-config-airbnb-typescript
   ```

   - this will install all the required dependency of airbnb eslint base configuration and airbnb react configuration and typescript config.

2. add below in the extend section of your eslint and it will start working.

   ```
   "extends": ["airbnb","airbnb-typescript","airbnb/hooks"]

   ```

   - note: you can add more rule-set library if needed for the project.

<h3 align='center'>configuration file changes</h3>

```diff
    {
        ....
    "extends": [
        ...
+       "airbnb",
+       "airbnb-typescript"
+       "airbnb/hooks"
    ],
+   "parser": "@typescript-eslint/parser",
    "parserOptions": {
       ...
    },
+   "plugins": ["@typescript-eslint"],

    }



```

<h2 align='center'>Recommend Eslint for Node.js + Typescript</h2>

1. run below commend to install required dependency

   ```
   npx install-peerdeps --dev eslint-config-airbnb-base

   npm i -D eslint-config-airbnb-typescript
   ```

   - this will install all the required dependency of airbnb eslint base configuration and typescript config.

2. add below in the extend section of your eslint and it will start working.

   ```
   "extends": ["airbnb-base","airbnb-typescript/base"]

   ```

   - note: you can add more rule-set library if needed for the project.

<h3 align='center'>configuration file Changes</h3>

```diff


    {
        ...
    "extends": [
        ...
+       "airbnb-base",
+       "airbnb-typescript/base"
    ],
+   "parser": "@typescript-eslint/parser",
    "parserOptions": {
        ...
    },
+   "plugins": ["@typescript-eslint"],

    }

```

<h2 align='center'> create custom eslint rule follow below steps </h2>

1. create a folder where you want to store all the rules and a index.js file for eslint

```diff

+   ├── my-eslint-plugin
+   │   ├──custom-rule.js
+   │   ├──index.js
     ....

```

2. create a file where you can store the rule code. below is a example of custom rule function defined in custom-rule.js file

```diff

+    module.exports = {
+    meta: {
+        type: 'problem',
+        docs: {
+        description: 'Description of the rule',
+        },
+        fixable: 'code',
+        schema: [], // no options
+    },
+    create(context) {
+        return {
+        // callback functions
+        CallExpression(node) {
+            if (node.callee.name === 'fun') {
+            context.report({ node, message: 'do\'t use fun method' });
+            }
+        },
+        };
+    },
+    };


```

3. create a index.js file in the folder with below format below is the example of my-eslint-plugin/index.js file

```diff
+    const noFunFunction = require('./custom-rule');

+    module.exports = {
+    rules: {
+        'no-fun-function': noFunFunction,
+    },
+    };


```

- "no-fun-function" is rule name and noFunFunction is the rule code that is defined in "custom-rule" file.

4. now link the rule with eslint for that define the rule-code a dev-dependency in packages.json like below

```diff

   "devDependencies": {
    ...
+    "eslint-plugin-my-eslint-plugin": "file:my-eslint-plugin"
   }

```

    * make sure to prefix the dependency name with "eslint-plugin-" as it's a standard in the eslint community.

5. now add your custom code as a plugin in eslint file like below.

```diff

 "plugins": [
    ...
+    "my-eslint-plugin"
    ],

```

6. now you can enable your custom rules

```diff

  "rules": {
    ....
+    "my-eslint-plugin/no-fun-function": "error"
  },

```

<h2> you can create custom configuration as well with the plugin follow below steps </h2>

1. add configs keys in the index.js file of plugin and add a key for configuration name like below

```diff
# /my-eslint-plugin/index.js

    module.exports = {
        ...
+        configs:{
+            myConfig:{
+                rules:{
+                    'my-eslint-plugin/no-fun-function': 'error'
+                }
+            }
+        }

    }


```

2. now you can add the plugin config in eslint file like below

```diff
    module.exports = {
        ...
        "extends": [
            ...
+            "plugin:my-eslint-plugin/myConfig"
        ],
    }


```

<h1 align='center'> set-up prettier </h1>

1. install prettier

```
npm install --save-dev --save-exact prettier

```

2. create a prettier.config.js file and define formatting rules

```diff

+   module.exports = {
+     semi: true,
+     singleQuote: true,
+   };


```

3. create npm script to format your codebase

```diff

   {
    ...
       "scripts": {
            ...
+           "my-prettier": "prettier --write ."
     },
   }

```

4. setup prettier for your code editor (vs code) optional

   - install prettier extension in vscode
   - open setting in vscode and search for format on save and turn on that option.
