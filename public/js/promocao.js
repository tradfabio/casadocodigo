const socket = io()

socket.on('novaPromocao', (promocao) => {
  alert('Nova Promocao', promocao.livro.titulo);
})
