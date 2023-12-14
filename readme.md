use below command to create a eslint file it will ask some question about how we want to create the es-lint file and what will be the default rules and what will be the file type .js,json,YAML

    npm init @eslint/config

to get es-lint error in vs code install a extension named "ESLint"


extends section contain all the rules-set library from that we are inheriting the rules and we can overwrite these rules as well.

example: eslint:recommended, plugin:@typescript-eslint/recommended




the rules section contain all the rules the we have overwrite or added

to run es-lint against the project run below command

    "eslint ."

to fix es-lint error automatically run below command

    "eslint --fix"



