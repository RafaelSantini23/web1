var funcionario;
var valorHora;
var quantidadeHorasTrabalhadas;
var salario;

function calcularHorasTrabalhadas() {

     funcionario = window.prompt('Qual é o seu nome?');
     valorHora = parseFloat(window.prompt('Informe o valor:'));
     quantidadeHorasTrabalhadas = parseFloat(window.prompt('Informe a quantidade de horas:'))

     salario = valorHora * quantidadeHorasTrabalhadas;

    window.alert("Nome do funcionario:"+funcionario);
    window.alert("Quantidade de horas: "+valorHora)
    window.alert("Salário mensal: "+salario);

}