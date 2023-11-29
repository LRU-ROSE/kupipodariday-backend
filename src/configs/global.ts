import { fileURLToPath } from 'url';

const GlobalConfig = () => ({
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  jwtExp: process.env.JWT_EXP,
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '3000', 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: [
      fileURLToPath(new URL('../**/*.entity.{js,ts}', import.meta.url)),
    ],
    synchronize: true,
    logging: false,
  },
});

export default GlobalConfig;
