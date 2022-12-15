module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
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
