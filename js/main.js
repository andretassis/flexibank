import ehUmCPF from "./valida-cpf.js"

const forms = document.querySelectorAll("[required]")

forms.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
})

function verificarCampo(campo) {

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(cpf)
    }
}