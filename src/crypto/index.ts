/*
  O módulo Crypto do Node.js provê funcionalidades ce criptografia.
  
  Esse módulo é usado para manipular dados sensíveis, como:
    - Autenticação e armazenamento de senhas
    - Transmissão segura de dados
*/

import crypto from "crypto";


function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex");
  
  return { salt, hashedPassword };
}

function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  return hashedPassword === hash;
}

console.log(hashPassword("senha123"));
console.log(verifyPassword("senhasla", "15d3303208daa82b861388580b8f8678", "35a4c3d34fc2999847f51ef3515ee9809b1252dcd5b24f749b802311f65ddede0c5a736dfd3167d3ee6927b9d5f1870264f4314dd0c3c676a5ac24a4c7fd265f"));
console.log(`UUID aleatório: ${crypto.randomUUID()}`);