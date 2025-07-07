/*
  O módulo Readline do Node.js provê uma interface para ler dados no command-line.
  
  Casos comuns:
    - Aplicações interativas no cli
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function ask(question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

async function survey() {
  try {
    const name = await ask("Qual é o seu nome?: ");
    const age = await ask("Quantos anos você tem?: ");
    
    console.log("\n====== Informações do Usuário ======");
    
    console.log(`Nome: ${name}`);
    console.log(`Idade: ${age}`);
  } catch (err) {
    console.error("Erro no formulário: " + err);
  } finally {
    rl.close();
  }
}

survey();