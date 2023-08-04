import { Sequelize } from 'sequelize';
import { development } from '../config/config';

const env = (process.env.NODE_ENV as 'production' | 'test' | 'development') || 'development';

const { database, username, password } = development[env];
const sequelize = new Sequelize(database, username, password, development[env]);

export { sequelize };
export default sequelize;
