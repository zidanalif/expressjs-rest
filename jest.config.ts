import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts"], // match inline test files
  moduleFileExtensions: ["ts", "js"],
};

export default config;
