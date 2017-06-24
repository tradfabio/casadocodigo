const ProdutoDao = require('../dao/ProdutoDao')
const PromocaoDao = require('../dao/PromocaoDao')

module.exports = function(app) {
  app.get('/promocoes/cadastro', (req, res) => {
    const produtoDao = new ProdutoDao()

    produtoDao.lista((err, livros, fields) => {
      res.status(200).render('promocoes/cadastro', {livros})
    })
  })
  app.post('/promocoes', (req, res) => {
    const promocao = req.body
    const promocaoDao = new PromocaoDao()

    promocaoDao.salva(promocao, (err, result, fields) => {
      if(!err) {
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocoes/lista')
      } else {
        res.render('503')
      }
    })
  })
  app.get('/promocoes/lista', (req, res) => {
    const promocaoDao = new PromocaoDao()

    promocaoDao.lista((err, lista, fields) => {
      res.render('promocoes/lista', {lista})
    })

  })
}
