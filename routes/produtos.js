const ProdutoDao = require('../dao/ProdutoDao');

function produtosRoutes(app){

  app.get("/produtos", (req,res) => {
    const produtoDao = new ProdutoDao();

    produtoDao.lista((err, result, fields) => {
      if (err) {
        res.render('503', {err});
      } else {
        //console.log(result);

        res.format({
          html: () => {
            res.render('produtos/lista',{lista:result});
          },
          json: () => {
            res.json({lista:result});
          }
        });
      };
    });

    //console.log('Recebeu requisição!!!');
    //res.render("produtos/lista");
  });

  app.post("/produtos", (req,res) =>{

    req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
    req.assert('preco', 'Preco nao pode ser vazio').isFloat();
    req.assert('preco', 'Preco deve ser um numero').isFloat();
    const errors = req.validationErrors()

    if (errors) {
      res.format({
        html: function(){
          res.status(400).render('produtos/form', {errors});
        },
        json: function(){
          res.status(400).json(errors);
        }
      })
      return
    }

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
