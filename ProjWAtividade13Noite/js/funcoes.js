
var cor;

function alterarCorDeFundoParaLaranja(cor) {
    document.bgColor = cor;
}

function alterarCorDaFonteParaBranco(){
    document.fgColor='White';
}

function modificarTituloDaPagina() {
    document.title='Aula de Javascript';
}

function exibirConfirmacao() {
    window.confirm('Deseja Continuar?');
}

function mostrarMensagem() {
    window.alert('Alo mundo!');
}

function solicitarNome() {
    window.prompt('Digite seu nome:');
}

function exibirDataHoraDaModificacao() {
    window.alert(document.lastModified);
}

function imprimir() {
    window.print('');
}
function executarTodosOsComandos() {


    if (window.confirm('Executar os comandos?')== true) {
        alterarCorDeFundoParaLaranja(window.prompt('Informe a cor de fundo:'));
        alterarCorDaFonteParaBranco();
        modificarTituloDaPagina();
        exibirConfirmacao();
        mostrarMensagem();
        solicitarNome();
        exibirDataHoraDaModificacao();
        imprimir();
    } else {
        window.alert('volte sempre!!')
    }
    
}

