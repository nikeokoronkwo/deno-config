import type { DenoConfigurationFileSchema as DenoConfig } from "./src/config.ts";

/**
 * Parses configuration as a string and returns the configuration as {@link DenoConfig}
 * 
 * In order to keep the functionality consistent between runtimes, we did not implement config parsing for files. To do this, read the file in your given runtime, and parse the string source to this function
 * @param {string} source The JSON source as a string
 * 
 * @returns {DenoConfig} The parsed configuration.
 * @throws {Error} Throws error if config does not satisfy the Deno Configuration Schema
 */
export function parseConfig(source: string): DenoConfig {
  try {
    const parseConfig = JSON.parse(source) satisfies DenoConfig;
    return parseConfig as DenoConfig;
  } catch (err) {
    throw new Error(`Error parsing configuration: ${(err as Error).message}`, { cause: err })
  }
}

export type {
  DenoConfig
};