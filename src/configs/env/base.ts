export const baseEnv = () => ({
  DEFAULT_LOCALE: 'ru',
  IS_PRODUCTION: true,
  IS_DEVELOPMENT: false,
  IS_TESTING: false,
  BASE_URL: 'http://192.168.0.103:3001',
  API_VERSION: 1,
});

export type Environment = ReturnType<typeof baseEnv>;
