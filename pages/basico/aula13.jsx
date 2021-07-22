export default function aula13(){
    return (
        <div>
        {gerarSpan(10)}
        </div>
    )
}

function gerarSpan(quantidade = 10){
    let lista = []

    for (let index = 1; index <= quantidade; index++) {
        lista.push(<span>{index},</span>)
    }

    return lista;
}