const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     password: 'ihpuh2kf',
     database: 'schule',
     connectionLimit: 5
});
pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });

    async function asyncFunction() {
        let conn;
        try {
          conn = await pool.getConnection();
          const rows = await conn.query("SELECT 1 as val");
          console.log(rows); //[ {val: 1}, meta: ... ]
          const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
      
        } catch (err) {
          throw err;
        } finally {
          if (conn) return conn.end();
        }
      }