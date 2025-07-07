/*
  O módulo Path do Node.js provê ferramentas que ajudam a construir caminhos que funcionam em qualquer sistema operacional.
*/

import path from "path";

// Retorna a última porção de um caminho
const filename = path.basename("/src/filesystem/created-file.txt");
console.log(filename);

console.log(`Diretório atual: ${__dirname}`);
console.log(`Arquivo atual: ${__filename}`);

// Junta 2 ou mais caminhos
const somePath = path.join(__dirname, "folder", "file.txt");
console.log(`Caminho qualquer: ${somePath}`);

// Retorna um objeto com informações sobre um caminho
const pathInfo = path.parse(__filename);
console.log(pathInfo);

// Caminho resolvido
const resolvedPath = path.resolve("file.txt");
console.log(`Caminho resolvido: ${resolvedPath}`);