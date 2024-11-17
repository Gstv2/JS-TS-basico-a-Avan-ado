/*
    ===== Alert, Confirm e Prompt ====

    - alert: Mostra uma mensagem simples ao usuário em uma janela pop-up.
    - confirm: Exibe uma mensagem com as opções "OK" e "Cancelar".
    - prompt: Exibe uma mensagem com um campo para entrada de texto.
*/

// Exemplo básico de alert
alert("Olá, seja bem-vindo!");

// Exemplo básico de confirm
let escolha = confirm("Você deseja acessar o sistema?");
console.log("Usuário clicou em OK?", escolha); // Registra no console o valor booleano (true/false)

// Exemplo básico de prompt
let nome = prompt("Por favor, digite o seu nome:");
console.log("Nome informado pelo usuário:", nome); // Exibe o valor digitado no console

// Outro exemplo de prompt
let idade = prompt("Quantos anos você tem?");
console.log("Idade informada pelo usuário:", idade); // Exibe a idade digitada

// Interagindo com alert para exibir informações fornecidas
alert("Obrigado por participar! Confira as informações no console.");

