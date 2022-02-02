// importando as funções do arquivo modal.js
import Modal from "./modal.js";
const modal = Modal();

// pega todas tags "a" que estão dentro de algo com a class "actions" e que a tag "a" tenha a class "check"
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  // add escuta de eventos em cada button / laço do loop
  // primeiro passamos oq queremos escutar, nessa caso "click"
  // depois passamos o evento em si "event" e oq queremos fazer com isso
  // no caso damos um modal.open()
  button.addEventListener("click", (event) => {
    // abre a modal
    modal.open();
  });
});