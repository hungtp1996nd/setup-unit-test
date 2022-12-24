/* eslint-disable */
export default {
  preset: 'ts-jest',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
}