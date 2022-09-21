module.exports = {
  preset: 'ts-jest',
  roots: [
    "./src"
  ],
  testEnvironment: 'node',
  transform: {
    '\\.ts$': "ts-jest"
  }
};
