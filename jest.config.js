module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test|create|read|update|delete).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    setupFilesAfterEnv: ['./jest.setup.js']
  };