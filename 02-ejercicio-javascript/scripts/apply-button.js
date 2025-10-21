// Forma rudimentaria de aplicar eventos a botones(menos eficiente)
// const botones = document.querySelectorAll(".btn-apply-job");
// botones.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     boton.textContent = "Aplicado!";
//     boton.classList.add('is-applied');
//     boton.disabled = true;
//   });
// });

// Forma mas eficiente de escuchar eventos en botones y es agarrando
// el elementos padre de los botones

// buton de aplicar
const jobListingSelection = document.querySelector(".jobs-listings");

jobListingSelection?.addEventListener("click", (e) => {
  const boton = e.target;
  if (boton.classList.contains("btn-apply-job")) {
    boton.textContent = "Aplicado!";
    boton.classList.add("is-applied");
    boton.disabled = true;
  }
});
