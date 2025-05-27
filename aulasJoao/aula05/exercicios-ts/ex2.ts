const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => console.log(cidade));
}

listarCidades(cidades);
