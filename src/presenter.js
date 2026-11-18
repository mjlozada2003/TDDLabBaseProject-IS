import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero"); //saca del html los campos de entrada con el id
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const multiplicarForm = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => { // registra una función para cuando se envie el formulario
  event.preventDefault(); //para no recargar la pagina

  // se leen acá porque el usuario puede cambiar los valores de los campos de entrada antes de enviar el formulario
  const firstNumber = Number.parseInt(first.value);// convierte el valor del campo de entrada en un número entero
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplicarForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
