// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/jest-runner for information about the jest plugin.",
  coverageAnalysis: "perTest",
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
  mutate: ["src/**/*.{js,ts,cjs,mjs}", "!src/**/*.d.ts"],
  mutator: {
    excludedMutations: ["StringLiteral"],
  },
  disableTypeChecks:
    "{test/**/*.{test,spec}.{js,ts,cjs,mjs},src/**/*.{js,ts,cjs,mjs}}",
  testRunnerNodeArgs: ["--experimental-vm-modules"],
  jest: {
    projectType: "custom",
    configFile: "jest.config.js",
  },
};
export default config;
