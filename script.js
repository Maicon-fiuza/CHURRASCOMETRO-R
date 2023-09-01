
// Carne será 400 gr por pessoa (se passar de 6 horas serão 650 gramas para cada pessoa)
// Cerveja será 1200 ml (1 LITRO E 200) por pessoa (se passar de 6 horas sera 2000 ml )
// Refrigerante/ agua - 1000 ml por pessoa passou de 6 horas 1500 ml 


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);


    resultado.innerHTML = `<p> ${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalCerveja /4200)} Caixas de Cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2L Refrigerante ou suco</p>`
   
}

function carnePP (duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }

}

function cervejaPP (duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }

}

function bebidasPP (duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }

}