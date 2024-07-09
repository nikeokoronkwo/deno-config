# Deno JS API for `deno.json`
[![JSR](https://jsr.io/badges/@dyte/deno-config)](https://jsr.io/badges/@dyte/deno-config)

This package represents a simple-to-use and platform-agnostic JavaScript API and Schema for the `deno.json` file.

Given a `deno.json` file like this

```json
{
  "tasks": {
    "dev": "deno run -A --watch main.ts",
    "build": "deno compile -A main.ts"
  },
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "dom.asynciterable",
      "deno.ns"
    ]
  }
}
```
We can extract and manipulate the json file with perfect typing using this package as shown:

```typescript
import deno from "./deno.json" with { type: "json" };
import { DenoConfig } from "jsr:@dyte/deno-config";

const denoConfig = deno as DenoConfig;

console.log(denoConfig.tasks?.dev) // "deno run -A --watch main.ts"
console.log(denoConfig.tasks?.build) // "deno compile -A main.ts"
console.log(denoConfig.name) // undefined
console.log(denoConfig.compilerOptions?.lib) // ["dom", "dom.iterable", "dom.asynciterable", "deno.ns"]
```

You can also use it to build one from scratch.

## Using this package

```bash
deno add @dyte/deno-config
npx jsr add @dyte/deno-config
pnpm dlx jsr add @dyte/deno-config
yarn dlx jsr add @dyte/deno-config
bunx jsr add @dyte/deno-config
```
