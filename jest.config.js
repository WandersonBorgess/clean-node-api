module.exports = {
  roots: ['<rootDiv>./src'],
  collectCoverageFrom: ['<rootDiv>./src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
