import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class Booking extends Model {
  public BookingId!: number;
  public price!: string;
  public readonly createdAt!: Date;
  public upeatedAt!: Date;
}

Booking.init(
  {
    bookingId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Booking',
    tableName: 'booking',
  }
);

export const associate = (db: dbType) => {};

export default Booking;
