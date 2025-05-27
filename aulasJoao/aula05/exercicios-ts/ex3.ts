interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

const meuLivro: Livro = {
    titulo: 'O Misterio de Joao Sifilis',
    autor: 'Luis Henrique',
    anoPublicacao: 2025
};

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(meuLivro);
