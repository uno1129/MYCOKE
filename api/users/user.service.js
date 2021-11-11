const pool = require("../../config/dbconfig");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(user_id, erp_code, lastname,firstname, position_id, user_type,group_id,parent_id,password) 
                values(?,?,?,?,?,?,?,?,?)`,
      [
        data.user_id,
        data.erp_code,
        data.lastname,
        data.firstname,
        data.position_id,
        data.user_type,
        data.group_id,
        data.parent_id,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select user_id, erp_code, lastname,firstname, position_id, user_type,group_id,parent_id,password from users where user_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select user_id, erp_code, lastname,firstname, position_id, user_type,group_id,parent_id,password from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set user_id=?, erp_code=?, lastname=?,firstname=?, position_id=?, user_type=?,group_id=?,parent_id=?,password=? `,
      [
        data.user_id,
        data.erp_code,
        data.lastname,
        data.firstname,
        data.position_id,
        data.user_type,
        data.group_id,
        data.parent_id,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where user_id = ?`,
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
