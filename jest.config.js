/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	moduleNameMapper: {
		//'^@compiled/(.*)$': '<rootdir>/compiled/$1'
	    '^@src/(.*)$': '<rootDir>/src/$1'
	},
	preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true
};
