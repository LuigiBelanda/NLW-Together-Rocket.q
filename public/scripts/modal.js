export default function Modal() {
  const modalWrapper = document.querySelector(".modal-wrapper");

  // busca a class "button" junto com a class "cancel"
  const cancelButton = document.querySelector(".button.cancel");
  // observamos o evento click e executamos a função close
  cancelButton.addEventListener("click", close);

  function open() {
    // colocando a class active no modal-wrapper
    modalWrapper.classList.add("active");
  }
  function close() {
    // tirando a class active no modal-wrapper
    modalWrapper.classList.remove("active");
  }
  return {
    open,
    close,
  };
}
