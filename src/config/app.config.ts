export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongodb: process.env.MONGODB_URL,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});
