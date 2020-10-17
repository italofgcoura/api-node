const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: ""
  // database: "hoteldatabase",
});

function conectar() {
  connection.connect(function (err) {
    if (err) return console.log(err);
    console.log("conectou!");
    // createDataBase(connection);
    useDatabase(connection);
    // createTable(connection);
    addRows(connection);
  });
}

module.exports = {
conectar,
};


function createDataBase(conn) {
  const sql = `CREATE DATABASE IF NOT EXISTS hoteldatabase2;`;

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("Banco criado!");
  });
}

function useDatabase(conn){
  const sql = `USE hoteldatabase2;`;

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("usando o banco de dados!");
  });  
}

function createTable(conn) {
  const sql = `CREATE TABLE IF NOT EXISTS users(ID int NOT NULL AUTO_INCREMENT,Nome varchar(150) NOT NULL,CPF char(11) NOT NULL,PRIMARY KEY (ID));`;

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("criou a tabela!");
  });
}

function addRows(conn) {
  const sql = "INSERT INTO users(Nome,CPF) VALUES ?";
  const values = [
    ["teste1", "12345678901"],
    ["teste1", "09876543210"],
    ["teste3", "12312312399"],
  ];
  conn.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log("adicionou registros!");
    conn.end(); //fecha a conexão
  });
}
