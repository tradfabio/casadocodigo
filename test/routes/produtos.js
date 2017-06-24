const express = require('../../custom-express');
const request = require('supertest')(express);

describe('#Rotas de produtos', () =>{
  it('Quero fazer uma requisicao para /produtos e retornar JSON', (done) => {
    request.get('/produtos')
           .set('Accept','application/json')
           .expect('Content-type', /json/)
           .expect(200,done)
  })
  it('Quero fazer uma requisicao para /produtos e retornar HTML', (done) => {
    request.get('/produtos')
           .expect('Content-type', /html/)
           .expect(200,done)
  })
  it('Quero incluir novo livro (JSON) para testar inclusao da base', (done) => {
    request.get('/produtos')
           .set('Accept','application/json')
           .expect('Content-type', /json/)
           //.send({ titulo: 'Supertest', preco: '12.98', descricao: 'sdassad' })
           .expect(200,done)
  })


//titulo: 'wwww', preco: '12.98', descricao: 'sdassad'

})
