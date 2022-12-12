module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
