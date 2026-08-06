function product(n1, n2)
{
    console.log(n1 * n2);
}

function media()
{
    let n1 = 8;
    let n2 = 9;
    let n3 = 7;
    let resultado = (8 + 9 + 7)/3;

    console.log(`a média é: ${resultado}`)
}

function alert()
{
    let n = window.prompt("Insira um numero");
    console.log(n);
    document.write("oi");
}

function antecSuccec()
{
    let n = Number(window.prompt("insira um numero"));
    console.log(`o antecessor de n é: ${n-1} e o sucessor é: ${n+1}`);
}

function seila()
{
    let n1 = Number(window.prompt("Insira o primeiro numero"));
    let n2 = Number(window.prompt("Insira o segundo numero"));
    console.log(n1 * n2);
    console.log(n1/n2);
}

function terca()
{
    let n1 = Number(window.prompt("Insira um valor"));
    console.log(n1/3);
}

function aplicBanc()
{
    let valor = Number(window.prompt("Insira o valor que tens em sua conta bancária"));
    let novoValor = valor+(valor*8)/100;
    console.log(`O valor é: ${valor}, que acrescido em 8% fica: ${novoValor}`)
}

function salarioLiqCalc()
{
    let horaAula = Number(window.prompt("Insira o valor da hora aula"));
    let horas = Number(window.prompt("Insira o número de horas"));
    let salarioBruto = horaAula*horas;
    let salarioLiq = salarioBruto - (salarioBruto*11)/100;
    console.log(`O salário bruto é: ${salarioBruto}; O salário líquido é: ${salarioLiq}`);
}

function prestacaoCalc()
{
    let valor = Number(window.prompt(`Insira o valor original da prestação`));
    let tempoAtraso = Number(window.prompt(`Insira o tempo em atraso em meses`));
    let taxa = Number(window.prompt("Insira a taxa percentual de juros"));
    let prestacao = valor + (valor * (taxa/100) * tempoAtraso);
    console.log(prestacao);
}

function salarioMensal()
{
    let salarioOriginal = Number(window.prompt("Insira seu salário mensal"));
    let reajustePercent = Number(window.prompt("Insira o percentual de reajuste"));
    console.log(salarioOriginal+(salarioOriginal*reajustePercent)/100);   
}

function convertGrausFahren()
{
    let fahren = Number(window.prompt("Insira os graus Fahrenheit"));
    let convert = fahren-32;
    convert = (convert*5)/9;
    console.log(convert);
}

function convertGrausCels()
{
    let celsius = Number(window.prompt("Insira os graus Celsius"));
    let convert = celsius*9;
    convert = convert/5;
    console.log(convert+32);
}

function percentVotosCalc()
{
    let eleitores = Number(window.prompt("Insira o número total de eleitores de um munícipios"));
    let votosBrancos = Number(window.prompt("Insira o número total de votos brancos"));
    let votosNulos = Number(window.prompt("Insira o número total de votos nulos"));
    let votosValidos = Number(window.prompt("Insira o total de votos válidos"));
    let percentBrancos = (eleitores*votosBrancos)/100;
    let percentNulos = (eleitores*votosNulos)/100;
    let percentValidos = (eleitores*votosValidos)/100;
    console.log(`o percentual de votos brancos, nulos e válidos em relação ao total de eleitores é, respectivamente: ${percentBrancos}%, ${percentNulos}% e ${percentValidos}%`);
}

function quesono()
{
    let valorGasto = Number(window.prompt("Insira o valor gasto no restaurante"));
    let taxa = (valorGasto*10)/100
    console.log(`o valor gasto no restaurante foi: ${valorGasto}, com a taxa de serviço de 10% fica: ${valorGasto+taxa}`);
}

function areaCircCalc()
{
    let raio = Number(window.prompt("Insira o raio do circulo"));
    console.log(Math.trunc(Math.PI * Math.pow(raio, 2)));
}

function acabaaa(minimo)
{
    let salario = Number(window.prompt("Insira seu salário"));
    let num = salario/minimo
    console.log(`você ganha ${num.toFixed(2)} salários minimos`);
}

// product(28, 43);
// media();
// alert();
//  antecSuccec();
// seila();
// terca();
// aplicBanc();
// salarioLiqCalc();
// prestacaoCalc();
// salarioMensal();
// convertGrausFahren();
// convertGrausCels();
// percentVotosCalc();
// quesono();
// areaCircCalc();
// acabaaa(Number(1621))