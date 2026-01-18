// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/jest-runner for information about the jest plugin.",
  coverageAnalysis: "off",
  // checkers: ["typescript"],
  // tsconfigFile: "tsconfig.json",
  // typescriptChecker: {
  //   prioritizePerformanceOverAccuracy: true,
  // },
  tempDirName: "stryker-tmp",
  ignorePatterns: [
    "tests/integration/cli/patterns-symlinks/**",
    "stryker-tmp/**",
  ],
  mutate: [
    // "src/**/*.{js,ts,cjs,mjs}",
    // "!src/**/*.d.ts",
    "src/document/printer/printer.js",
  ],

  mutator: {
    excludedMutations: ["StringLiteral"],
  },
  disableTypeChecks:
    "{test/**/*.{test,spec}.{js,ts,cjs,mjs},src/**/*.{js,ts,cjs,mjs}}",
  testRunnerNodeArgs: ["--experimental-vm-modules"],
  jest: {
    projectType: "custom",
    configFile: "jest.config.js",
    config: {
      // testEnvironment: "@stryker-mutator/jest-runner/jest-env/node",
      // collectCoverage: true,
      // coverageDirectory: "coverage/",
      // collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
      testPathIgnorePatterns: [
        "/tests/dts/",
        "/tests/config/",
        "/tests/format/",
        "/tests/integration/",
      ],
    },
  },
};
export default config;
