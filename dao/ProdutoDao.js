//ES5
/*
const connectionFactory = require('../infra/connectionFactory');

function ProdutoDao () {
  this.connection = connectionFactory();
}

ProdutoDao.prototype.lista = function(callback) {
  this.connection.query('SELECT * FROM livros', (err, result, fields) => {
    callback(err, result, fields);
  })
}

module.exports = ProdutoDao;
*/

//ES6
class ProdutoDao {
  constructor(connection){
    this.connection = connection;
  }

//  lista(callback) {
//    this.connection.query('SELECT * FROM livros', (err, result, fields) => {
//      callback(err, result, fields);
//    })

    lista(callback) {
      this.connection.query('SELECT * FROM livros', callback);
    }
}

module.exports = ProdutoDao;
