// User 모델과 그에 대한 연관 관계를 정의한 associate 함수를 가져옵니다.
import User, { associate as associateUser } from './user';
// Booking 모델과 그에 대한 연관 관계를 정의한 associate 함수를 가져옵니다.
import Booking, { associate as associateBooking } from './booking';
// Concert 모델과 그에 대한 연관 관계를 정의한 associate 함수를 가져옵니다.
import Concert, { associate as associateConcert } from './concert';

// ./sequelize 파일에서 정의한 모든 내용을 가져와서 모듈에서 내보냅니다.
export * from './sequelize';

// User, Booking, Concert 모델들을 객체 형태로 묶어서 db라는 변수에 할당합니다.
const db = {
  User,
  Booking,
  Concert,
};

// db 객체를 타입으로 지정하여 dbType이라는 타입을 정의합니다.
export type dbType = typeof db;

// User, Booking, Concert 모델들과 그에 대한 연관 관계를 정의한 associate 함수를 호출합니다.
// 이를 통해 모델들 간에 관계가 설정되어 서로 연결됩니다.
associateUser(db);
associateBooking(db);
associateConcert(db);
