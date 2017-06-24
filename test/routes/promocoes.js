const express = require('../../custom-express')
const request = require('supertest')(express)

describe('Rotas das promocoes', () => {
  it('Tela de cadastro que responde um HTML com status 200', (done) => {
    request.get('/promocoes/cadastro')
           .expect('Content-type', /html/)
           .expect(200, done)
  })
  it('Rota para salvar uma promocao na base utilizando um formulári', (done) => {
    request.post('/promocoes')
           .set('Accept', 'text/html')
           .type('form')
           .send({ livro: {titulo: 'Livro de NodeJS'} })
           .send({ descricao: 'Livro simple, direto e legal' })
           .expect('Content-type', /html/)
           .expect(302, done)
  })
})
