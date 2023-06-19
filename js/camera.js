// encontra os elementos pelo data-attribute
const btnIniciarCamera = document.querySelector("[data-video-botao]");
const camera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const btnEnviar = document.querySelector("[data-enviar");

let imagemURL = "";

// inicia a camera do usuário (se ele permitir)
btnIniciarCamera.addEventListener("click", async function () {
    const iniciarCamera = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    btnIniciarCamera.style.display = "none";
    camera.style.display = "block";

    video.srcObject = iniciarCamera;
})

// tira uma foto por meio da camera do usuário
btnTirarFoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg");

    camera.style.display = "none";
    mensagem.style.display = "block";
})

// recebe os dados já existentes no localStorage, converte-os, adiciona a imagem tirada aos dados e os envia novamente para o localStorage
btnEnviar.addEventListener("click", () => {
    const receberDados = localStorage.getItem('cadastro');
    const converterDados = JSON.parse(receberDados);

    converterDados.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converterDados));

    window.location.href = "./abrir-conta-form-3.html";
})