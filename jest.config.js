// jest.config.js

module.exports = {
  // Other Jest configuration options...

  moduleNameMapper: {
    '^@compiled/(.*)$': '<rootDir>/compiled/$1',
  },
   transform: {
         '^.+\\.(js|ts)$': 'babel-jest',
       },
   // verbose: true,
   // silent: true,
};
