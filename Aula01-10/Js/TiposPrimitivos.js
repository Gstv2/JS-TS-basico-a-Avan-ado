/*
    ==== TIPOS PRIMITIVOS ====
    * number => Representa números inteiros e de ponto flutuante (ex.: 10, 3.14)
    * string => Representa textos ou sequências de caracteres (ex.: "Olá, mundo!")
    * boolean => Representa valores lógicos: true (1) ou false (0)
    * undefined => Representa uma variável que foi declarada, mas não possui valor atribuído
    * null => Representa a ausência intencional de qualquer valor
*/

// Exemplo de tipo number
let numeroInteiro = 42; // Número inteiro
let numeroFlutuante = 3.14; // Número com ponto flutuante
console.log("Número inteiro:", numeroInteiro);
console.log("Número flutuante:", numeroFlutuante);

// Exemplo de tipo string
let texto = "Olá, mundo!"; // Cadeia de caracteres
let textoComAspas = 'Texto com aspas simples';
let textoInterpolado = `Número da sorte: ${numeroInteiro}`; // Template string
console.log("String simples:", texto);
console.log("String com aspas simples:", textoComAspas);
console.log("Template string:", textoInterpolado);

// Exemplo de tipo boolean
let verdadeiro = true;
let falso = false;
console.log("Valor boolean verdadeiro:", verdadeiro);
console.log("Valor boolean falso:", falso);

// Exemplo de undefined
let variavelIndefinida;
console.log("Valor undefined:", variavelIndefinida);

// Exemplo de null
let variavelNula = null;
console.log("Valor null:", variavelNula);

// Testando os tipos
console.log("Tipo de numeroInteiro:", typeof numeroInteiro); // number
console.log("Tipo de texto:", typeof texto); // string
console.log("Tipo de verdadeiro:", typeof verdadeiro); // boolean
console.log("Tipo de variavelIndefinida:", typeof variavelIndefinida); // undefined
console.log("Tipo de variavelNula:", typeof variavelNula); // object (peculiaridade do JavaScript)


/* 
    exemplos de colocar o um console com um number no meio do texto 
    * concatenando
    * fora de aspas e entre virgulas
    * por variaveis (mas ainda nn foi mostrado variaveis);
*/
console.log("Meu nome é 'Gustavo'. Estou aprendendo JavaScript às "+17+" da tarde!-> Concatenando");
console.log("Meu nome é 'Gustavo'. Estou aprendendo JavaScript às ",17," da tarde!-> Por virgula e fora de aspas");
// exemplo com variavel
let numero = 17;
console.log(`Meu nome é 'Gustavo'. Estou aprendendo JavaScript às ${numero} da tarde!-> Por variaveis`);
