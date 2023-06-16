export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    validaIdade(dataNascimento)

    console.log(validaIdade(dataNascimento))
}

function validaIdade(data) {
    const dataAtual = new Date();
    const maioridade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= maioridade
}