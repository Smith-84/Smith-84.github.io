var btn = document.querySelector(".modal");
var modal = document.querySelector(".modal-form");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("show");
});


