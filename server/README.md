$ npm i express @types/express mongoose @types/mongoose nodemon ts-node typescript
$ tsc --init


# setting firewall for ufw wsl

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-16-04
# tsconfig.json

"module": "commonjs", /_ Specify what module code is generated. _/
"rootDir": "./src", /_ Specify the root folder within your source files. _/
"moduleResolution": "node10",  
 "outDir":"./build"

# package.json

"scripts": {
"start":"node ./build/index.ts",
"build":"tsc -p .",
"dev":"nodemon ./src/index.ts"

},
