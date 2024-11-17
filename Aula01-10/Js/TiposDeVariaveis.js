/*
    ==== Variáveis com let, const e var ====

    * `let`: Declara uma variável que pode ter seu valor alterado, mas não pode ser redeclarada no mesmo escopo.
    * `const`: Declara uma constante, ou seja, um valor que não pode ser alterado ou redeclarado.
    * `var`: Declara uma variável que pode ser alterada e redeclarada, mas é menos recomendada devido ao comportamento de escopo.
*/

console.log("==== Variáveis com let, const e var ====");

let nome = "Gustavo"; // Variável com valor inicial "Gustavo"
const nascimento = "08.02.2006"; // Constante que não pode ser alterada
var idade = 20; // Variável inicial com o valor 20

// Exibindo os valores das variáveis
console.log(`Meu nome é ${nome}, nascido em ${nascimento}, tenho ${idade} anos.`);

// Testando alteração de valores
nome = "Luis"; // Permitido, porque usamos `let`
console.log(`Meu nome atualizado é ${nome}.`);

// Tentativa de alterar uma constante
// nascimento = "01.01.2000"; // Isso resultará em um erro, pois `const` não permite alteração.

// Redefinindo uma variável com `var`
var idade = 23; // Permitido, mas pode gerar problemas de consistência.
console.log(`Idade redefinida usando var: ${idade}`);

// Tentativa de redefinir uma variável com `let`
// let nome = "Carlos"; // Isso resultará em um erro, pois `let` não pode ser redeclarado no mesmo escopo.

/*
    === Boas práticas ===
    1. Use `const` sempre que o valor não precisar ser alterado. 
       Exemplo: valores fixos como datas ou configurações.
    2. Prefira `let` quando o valor precisa mudar, mas evite redeclarações.
    3. Evite `var` a menos que seja absolutamente necessário. 
       Seu comportamento de escopo e redeclaração pode causar erros inesperados.
*/

/*
    ==== Escopo de Variáveis ====
    * Variáveis declaradas com `let` e `const` respeitam o escopo de bloco.
    * Variáveis declaradas com `var` têm escopo de função ou global.
*/

{
    let escopoLet = "Estou no escopo de bloco.";
    const escopoConst = "Também estou no escopo de bloco.";
    console.log(escopoLet); // Funciona
    console.log(escopoConst); // Funciona
}

// console.log(escopoLet); // Isso resultará em um erro, pois `let` não existe fora do bloco acima.
// console.log(escopoConst); // Isso também resultará em erro.