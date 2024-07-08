import { compileFromFile } from "npm:json-schema-to-typescript";

const jsonSchema = await fetch("https://deno.land/x/deno/cli/schemas/config-file.v1.json").then(async r => await r.text());

const schemaFile = "./schema/deno_schema.json";

await Deno.mkdir("./schema", { recursive: true });
await Deno.writeTextFile(schemaFile, jsonSchema);

const tsCode = await compileFromFile(schemaFile, { bannerComment: ` /** 
* @file The Deno Configuration File
* @license MIT
* 
* The configuration of a Deno JSON file (\`deno.json\` or \`deno.jsonc\`) as a JavaScript Object. 
* 
* The Deno configuration file is used for configuring Deno projects and providing runnable scripts, workspace settings, package information and more for a Deno Project.
* 
* \`\`\`json
* {
*   "name": "@org/pkg",
*   "version": "1.0.0",
*   "exports": "./mod.ts"
* }
* \`\`\`
* 
* This file (and the package in general) acts as a JavaScript/TypeScript API for the configuration file, allowing you to be able to interact with the Deno Configuration file for your projects and much more.
* 
* The package has no direct dependencies, therefore allowing you to do this in whatever runtime you choose to.
* 
* @note This package does not support \`.jsonc\` at the moment, but can be implemented on your own.
*/ ` });

await Deno.mkdir("./src", { recursive: true });
await Deno.writeTextFile("./src/config.ts", tsCode);