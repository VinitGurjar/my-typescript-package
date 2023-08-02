# @types/{npm_package}

- TypeScript expects all globally-used code to be typed, as it does for your code when your project has a reasonable configuration. The TypeScript library itself contains only typings for the code of the TypeScript package. It is possible to write your own typings for a library, but that is rarely needed - since the TypeScript community has done it for us!
  
- As with npm, the TypeScript world also celebrates open-source code. The community is active and continuously reacting to updates and changes in commonly-used npm packages. You can almost always find the typings for npm packages, so you don't have to create types for all of your thousands of dependencies alone.

- Usually, types for existing packages can be found from the @types organization within npm, and you can add the relevant types to your project by installing an npm package with the name of your package with a @types/ prefix. For example:
```
npm install --save-dev @types/react @types/express @types/lodash @types/jest @types/mongoose
```
- and so on and so on. The `@types/*` are maintained by Definitely typed, a community project to maintain types of everything in one place.

- Sometimes, an npm package can also include its types within the code and, in that case, installing the corresponding @types/* is not necessary.

> NB: Since the typings are only used before compilation, the typings are not needed in the production build and they should always be in the devDependencies of the package.json.

- Since the global variable process is defined by Node itself, we get its typings from the package `@types/node`.

- Since version 10.0 `ts-node` has defined @types/node as a peer dependency. If the version of npm is at least 7.0, the peer dependencies of a project are automatically installed by npm. If you have an older npm, the peer dependency must be installed explicitly:

```
npm install --save-dev @types/node
```

- When the package @types/node is installed, the compiler does not complain about the variable process. Note that there is no need to require the types to the code, the installation of the package is enough!

