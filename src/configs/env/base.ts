export const baseEnv = () => ({
  DEFAULT_LOCALE: 'ua',
  IS_PRODUCTION: true,
  IS_DEVELOPMENT: false,
  IS_TESTING: false,
  BASE_URL: 'http://localhost:3001',
  API_VERSION: 1,
});

export type Environment = ReturnType<typeof baseEnv>;
