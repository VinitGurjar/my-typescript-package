# my-typescript-package
## Tools used :
### [ts-node package](https://github.com/TypeStrong/ts-node) : 
- ts-node is a TypeScript execution engine and REPL for Node.js.
- It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.
- Add this package into script object of package.json file.
  ```
  {
  // ..
  "scripts": {
    "ts-node": "ts-node"
  },
  // ..
  }
  ```

-  Command to use ts-node
 ```
 npm run ts-node file.ts -- -s --someoption
 ```
