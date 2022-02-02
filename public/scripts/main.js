// importando as funções do arquivo modal.js
import Modal from "./modal.js";
const modal = Modal();

// pegando os elementos da modal como h2, p e button
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// pega todas tags "a" que estão dentro de algo com a class "actions" e que a tag "a" tenha a class "check"
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  // add escuta de eventos em cada button / laço do loop
  // primeiro passamos oq queremos escutar, nessa caso "click"
  // depois passamos o evento em si "event" e oq queremos fazer com isso
  // no caso damos um modal.open()
  button.addEventListener("click", ("click", handleClick));
});

// pega todas as tags "a" com a class "delete" dentro de algo com a class "actions"
const deleteButton = document.querySelectorAll(".actions a.delete");

// escuta o evento e abre a modal, mesma coisa com o código acima
deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

// chamamos essa função nos addEventListener acima
// e caso a pessoa selecione o deleteButton ele passa o check como false
// com isso podemos reduzir um pouco o código de ficar trocando os elementos da modal conforme o usuário clica nos buttons
function handleClick(event, check = true) {
  // com a linha abaixo quando clicarmos nas tags "a" ela não irá add # no link do site
  // as tags "a" deixam de se comportar de certa forma como links
  event.preventDefault();

  // form / action (pegando as infos)
  const slug = check ? "check" : "delete";

  const questionId = event.target.dataset.id;
  const roomId = document.querySelector("#room-id").dataset.id;

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`);

  // mudando HTML da modal
  const text = check ? "Marcar como lida" : "Excluir";

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;

  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  // abre a modal
  modal.open();
}
