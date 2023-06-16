import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeIdade from "./valida-idade.js"

const forms = document.querySelectorAll("[required]")

forms.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
})

function verificarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(cpf)
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo)
    }
}