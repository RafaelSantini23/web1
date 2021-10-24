
function alterarCorDeFundoEFonte(cor,fontee) {
    document.bgColor = cor;
    document.fgColor = fontee;
}


function mostrarMensagemEConfirmacao() {
    window.alert('Eae sor!')
    window.confirm('Continuar?');
        
}

function aumentarTamanho() {
    var altura = document.querySelector("#pequena");
    if(altura.style.width = "30px"){
        altura.style.width = "1024px";
        document.getElementById("pequena").style.backgroundColor = "red";
     }
}
function diminuirTamanho() {
    var altura = document.querySelector("#pequena");
    
    if(altura.style.width = "1024px"){
        altura.style.width = "30px"
        document.getElementById("pequena").style.backgroundColor = "blue";

       
     }
     
}