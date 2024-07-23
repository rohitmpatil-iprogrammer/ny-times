module.exports = {
  // Specify the test environment
  testEnvironment: 'jsdom',

  // Specify the test files
  testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(test).ts?(x)'],

  // Specify the transform configuration
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": [
      "ts-jest",
    {
          diagnostics: {
            ignoreCodes: [1343],
          },
          astTransformers: {
            before: [
              {
                path: 'node_modules/ts-jest-mock-import-meta',
                options: {
                  metaObjectReplacement: {
                    env: {
                      // Replicate as .env.local
                      NODE_ENV: 'development',
                    },
                  },
                },
              },
            ],
          },
        },]
  },

  preset: 'ts-jest',
  // Specify the module name mapper
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },

  // Specify the module file extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Specify the setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};