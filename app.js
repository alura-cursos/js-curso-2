function dobra() {
    return entrada * 2;
}
function verificarChute(){
    entrada = parseInt(document.querySelector('input').value);
    console.log(entrada);
    console.log(dobra());
}