const connectionFactory = require('../infra/connectionFactory')

function produtosRoutes(app){

  app.get("/produtos", (req,res) => {
    const connection = connectionFactory();

    connection.query('SELECT * FROM livros', (err, result, fields) => {
          console.log(result);
          res.render('produtos/lista',{lista:result});
    });

    connection.end();

    //console.log('Recebeu requisição!!!');
    //res.render("produtos/lista");
  });

}

module.exports = produtosRoutes;
