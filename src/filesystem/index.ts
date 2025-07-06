/*
  O módulo File System do Node.js (fs) provê uma série de métodos para manipular arquivos.
  
  Permite realizar operações I/O de forma síncrona ou assíncrona.
  
  Casos comuns:
    - Ler e modificar arquivos
    - Criar e deletar arquivos
    - Criar e deletar diretórios
    - Ler o conteúdo de um diretório
*/

import fs from "fs/promises";

// Ler arquivos
async function readFile() {
  try {
    const data = await fs.readFile("src/filesystem/myfile.txt", "utf8");
    console.log(`Conteúdo do arquivo: ${data}\n`);
  } catch (err) {
    console.error(err);
  }
}

readFile();

// Criar arquivos
async function createFile() {
  await fs.writeFile("src/filesystem/created-file.txt", "Esse arquivo foi criado usando o módulo fs!", "utf8");
  
  const data = {
    text: "Esse JSON foi criado usando o módulo FS!",
    author: "Hest"
  };
  await fs.writeFile("src/filesystem/created-json.json", JSON.stringify(data, null, 2), "utf8");
  
  console.log("Arquivos criados com sucesso.");
}

createFile();

// Modificar arquivos
async function appendFile() {
  await fs.appendFile("src/filesystem/myfile.txt", "\nEsse conteúdo foi escrito com o módulo FS!", "utf8");
  console.log("\nArquivo modificado com sucesso.");
}

appendFile();

// Deletar arquivos
async function deleteFile() {
  const filePath = "src/filesystem/myfile.txt";
  
  try {
    // Verifica se o arquivo existe
    await fs.access(filePath);
    
    await fs.unlink(filePath);
    console.log("Arquivo deletado com sucesso.");
  } catch {
    console.log("O arquivo não existe!");
  }
}

deleteFile();