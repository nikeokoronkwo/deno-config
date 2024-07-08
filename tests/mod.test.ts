import { assert, assertEquals, assertExists } from "jsr:@std/assert";
import { parseConfig } from "../mod.ts";

Deno.test({
    name: "Config Validation Test"
}, () => {
    const config = `{ "tasks": { "watch": "deno run -A --watch dummy.ts" }}`
    const parsedConfig = parseConfig(config);

    assertExists(parsedConfig.tasks);
    assertExists(parsedConfig.tasks.watch);
    assertEquals(parsedConfig.tasks.watch, "deno run -A --watch dummy.ts");
});
