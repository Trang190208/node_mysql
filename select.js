const db = require('./lib/db');

const con = db.connect();

//SQL 1
let sq = '';
sql = 'SELECT * FROM users';

//exec SQL
con.query(sql,(err,results) =>{
    if (err) throw err;
    results.forEach((user) =>{
        console.log(user.id);
        console.log(user.email)

    })
});

//SQL 2
sql = 'SELECT * FROM users WHERE ?';
let params = {}
params = { id: 3 }

//exec SQL
con.query(sql,params, (err,results) =>{
    if (err) throw err;
    let user = results[0];
    console.log('${user.first_name} ${user.last_name}');
})

//SQL 3
sql = 'SELECT * FROM users WHERE LIMIT ? OFFSET ?';
const limit = 3;
const offset = 0;
params = [limit,offset]

con.query(sql,params, (err,results) =>{
    if (err) throw err;
    results.forEach((user) =>{
        console.log(user.email)
    });  
})

con.end();