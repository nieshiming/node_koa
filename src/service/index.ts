import * as mysql from 'mysql';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'nsm.1314',
  database: 'levi',
});

db.connect();

export const getLoginUserInfo = async (userId: number) => {
  if (!userId) return '';

  return new Promise((resolve) => {
    db.query('select * from user', (err, result) => {
      if (!err) {
        resolve(result);
      }
    });
  });
};

export const demo = () => console.log(1);
