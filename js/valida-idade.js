// exporta a função de validar o a idade para ser utilizada no main.js
export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

// valida se o usuário é maior de idade
function validaIdade(data) {
    const dataAtual = new Date();
    const maioridade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= maioridade;
}