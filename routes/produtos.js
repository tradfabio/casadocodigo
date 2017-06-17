const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao');

function produtosRoutes(app){

  app.get("/produtos", (req,res) => {
    const connection = connectionFactory();
    const produtoDao = new ProdutoDao(connection);

    produtoDao.lista((err, result, fields) => {
      if (err) {
        res.render('503', {err});
      } else {
        console.log(result);
        res.render('produtos/lista',{lista:result});
      }
    });

    connection.end();

    //console.log('Recebeu requisição!!!');
    //res.render("produtos/lista");
  });

}

module.exports = produtosRoutes;
