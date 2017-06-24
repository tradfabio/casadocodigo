const createConnection = require('../infra/connectionFactory')

class PromocaoDao {
  constructor() {
    this._connection = createConnection()
  }

  salva(promocao, callback) {
    this._connection.query('INSERT INTO promocoes SET titulo=?, descricao=?', [promocao.livro.titulo, promocao.descricao], callback)
  }

  lista(callback) {
    this._connection.query('SELECT * FROM promocoes', callback)
  }
}

module.exports = PromocaoDao
