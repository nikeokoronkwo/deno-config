import { compileFromFile } from "npm:json-schema-to-typescript";

const jsonSchema = await fetch("https://deno.land/x/deno/cli/schemas/config-file.v1.json").then(async r => await r.text());

const schemaFile = "./schema/deno_schema.json";

await Deno.mkdir("./schema", { recursive: true });
await Deno.writeTextFile(schemaFile, jsonSchema);

const tsCode = await compileFromFile(schemaFile, { bannerComment: "/* Auto Generated: DO NOT EDIT */" });

await Deno.mkdir("./src", { recursive: true });
await Deno.writeTextFile("./src/config.ts", tsCode);