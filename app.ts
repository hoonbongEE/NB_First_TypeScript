import express from 'express'; // Express 웹 프레임워크
import morgan from 'morgan'; // 로깅 미들웨어
import cors from 'cors'; // CORS(Cross-Origin Resource Sharing) 설정 미들웨어
import cookieParser from 'cookie-parser'; // 쿠키 파싱 미들웨어
import dotenv from 'dotenv'; // .env 파일로부터 환경 변수를 읽는 미들웨어
// import passport from "passport"; // 사용자 인증 미들웨어
// import hpp from "hpp"; // HTTP Parameter Pollution 방지 미들웨어
// import * as helmet from "helmet"; // 보안 헤더 설정 미들웨어 (비활성화 상태)

import { sequelize } from './models/index';
import router from './routes/index';

dotenv.config();

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3030);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('sync start');
  })
  .catch(err => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/api', router);

app.listen(app.get('port'), () => {
  console.log(`포트: 서버 열림 : ${app.get('port')}`);
});
