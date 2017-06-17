const ProdutoDao = require('../dao/ProdutoDao');

function produtosRoutes(app){

  app.get("/produtos", (req,res) => {
    const produtoDao = new ProdutoDao();

    produtoDao.lista((err, result, fields) => {
      if (err) {
        res.render('503', {err});
      } else {
        console.log(result);
        res.render('produtos/lista',{lista:result});
      }
    });

    //console.log('Recebeu requisição!!!');
    //res.render("produtos/lista");
  });

  app.post("/produtos", (req,res) =>{
    const livro = req.body;
    const produtoDao = new ProdutoDao();

    produtoDao.insere (livro, (err, result, fields) => {
      if (err) {
        res.render('503', {err});
      } else {
        res.redirect('/produtos');
      }
    })
    //res.send("Produto cadastrado com sucesso!");
  })

  app.get("/produtos/form",(req, res) => {
    res.render("produtos/form");
  })
}

module.exports = produtosRoutes;
