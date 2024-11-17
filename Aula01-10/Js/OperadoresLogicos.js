/*
    ====Operadores Logicos====
    
    * +, -, *, /
    * ** pontencia, % resto da divisão (3/2 resta 1, 2/2 resta 0)
    * Incremento = ++ Soma 1 ao valor na variavel
    * Decremento = -- Subtrai 1 ao valor na variavel
    
    */

// Demonstrando operações básicas e incrementos/decrementos

let valor1 = 10;
let valor2 = 5;

// Operações básicas
let soma = valor1 + valor2; // Soma
let subtracao = valor1 - valor2; // Subtração
let multiplicacao = valor1 * valor2; // Multiplicação
let divisao = valor1 / valor2; // Divisão

console.log("Soma:", soma); // Exibe 15
console.log("Subtração:", subtracao); // Exibe 5
console.log("Multiplicação:", multiplicacao); // Exibe 50
console.log("Divisão:", divisao); // Exibe 2

// Operadores especiais
let potencia = valor1 ** 2; // Potência (10^2)
let restoDivisao = valor1 % 3; // Resto da divisão por 3

console.log("Potência:", potencia); // Exibe 100
console.log("Resto da divisão:", restoDivisao); // Exibe 1

// Incremento e decremento
let contador = 0;
contador++; // Incrementa 1
console.log("Após incremento:", contador); // Exibe 1
contador--; // Decrementa 1
console.log("Após decremento:", contador); // Exibe 0
