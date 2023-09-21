const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

//recibe un nombre y hace que el elemento HTML con clase name muestre ese nombre. También debe mostrarse en el texto alternativo de la imagen

const setName = (name) => {
  const removeClassName = document.querySelector("h2");
  removeClassName.classList.remove("off");

  const nameElement = (document.querySelector(".name").textContent = name);
};

formElement.addEventListener("change", (event) => {
  switch (event.target) {
    case nameInputElement:
      setName(event.target.value);
      break;
    case birthdateInputElement:
      // Invoca a la función para poner la edad
      break;
    case pictureInputElement:
      // Invoca a la función para poner la imagen
      break;
    case javascriptInputElement:
      // Invoca a la función para poner si ha programado previamente JS o no
      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento
      break;
  }
});
