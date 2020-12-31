const { Router } = require('express');
const path = require('path');
const mysql = require('mysql2');

const router = Router();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'calendar_f1',
    password: 'sorokin034'
});

const createSqlReq = (str = '') => {
    return `SELECT * FROM calendar ${str}`;
}

const conditions = {
    equally: '=',
    more: '>',
    less: '<'
}

router.get('/getData', (req, res) => {
    connection.query(
        createSqlReq(),
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        }
    );
});

router.get('/getData/query', (req, res) => {
    const tableField = req.query.tableField;
    const condition = req.query.condition;
    const value = req.query.text;
    let sql;

    if (condition === 'сontain') {
        sql = createSqlReq(`WHERE ${tableField} LIKE '%${value}%'`);
    } else {
        sql = createSqlReq(`WHERE ${tableField} ${conditions[condition]} '${value}'`);
    }

    connection.query(
        sql,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        }
    );
});

module.exports = router;