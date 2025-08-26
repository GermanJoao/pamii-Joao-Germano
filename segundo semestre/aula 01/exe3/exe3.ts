interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const meuLivro: Livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954
};

function exibirLivro(livro: Livro): void {
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(meuLivro);
