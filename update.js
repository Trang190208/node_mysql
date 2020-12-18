//load db.js
const db = require('./lib/db');

//connect DB55
const con = db.connect();


const first_name = 'thanthi';
const last_name = 'thuytrang';
const id = 1;
let params = [first_name, last_name];

const sql = 'UPDATE users SET first_name =?, last_name = ? WHERE id ?';
con.query(sql,params, (err,results) =>{
    if (err) throw err;
    console.log(results);
    console.log('update success!!');
})

con.end();
