import dotenv from 'dotenv';
dotenv.config();

const development: any = {
  development: {
    username: 'hoon',
    password: process.env.DB_PASSOWRD,
    database: 'DB_Ts_Test',
    host: 'expressdb.cstrqobrftgn.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSOWRD,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSOWRD,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
export { development };
// export default {
//   development: {
//     username: "hoon",
//     password: process.env.DB_PASSOWRD,
//     database: "DB_Ts_Test",
//     host: "expressdb.cstrqobrftgn.ap-northeast-2.rds.amazonaws.com",
//     dialect: "mysql",
//   },
//   test: {
//     username: "root",
//     password: process.env.DB_PASSOWRD,
//     database: "database_test",
//     host: "127.0.0.1",
//     dialect: "mysql",
//   },
//   production: {
//     username: "root",
//     password: process.env.DB_PASSOWRD,
//     database: "database_production",
//     host: "127.0.0.1",
//     dialect: "mysql",
//   },
// };
