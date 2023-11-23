/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest').default;

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: ['.*\\.mock\\.tsx?$', '.*\\.mock\\.ts?$', '.*\\.config\\.ts?$', '.*\\.config\\.tsx?$']
};

module.exports = createJestConfig(customJestConfig);