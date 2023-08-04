import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class User extends Model {
  public userId!: string; // 수정: userId는 필수로 존재해야 합니다.
  public email!: string;
  public password!: string;
  public nickname!: string;
  public phone!: string;
  public readonly createdAt!: Date; // 수정: createdAt은 읽기 전용이어야 합니다.
  public readonly updatedAt!: Date; // 수정: updatedAt은 읽기 전용이어야 합니다.
}

User.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(20),
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
  }
);

export const associate = (db: dbType) => {
  //   db.User.hasMany(db.Booking, { foreignKey: "userId", as: "bookings" });
};

export default User;
