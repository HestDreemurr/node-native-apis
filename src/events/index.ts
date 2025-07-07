/*
  O Node.js usa uma arquitetura orientada a eventos, onde objetos chamados "emitters" emitem eventos nomeados que causam a execução de um callback.
*/

import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.once("ready", () => {
  console.log("O Emitter está pronto!");
});

emitter.on("memberJoin", (name: string, id: number) => {
  console.log(`O membro ${name} (${id}) entrou!`);
});

emitter.on("error", (err: Error) => {
  console.error(err);
})

emitter.emit("ready");
emitter.emit("memberJoin", "Hest", 1);
emitter.emit("error", new Error("Erro de teste"));