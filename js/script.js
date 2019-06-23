let btn = document.querySelector(".modal");
let modal = document.querySelector(".modal-form");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("show");
});


