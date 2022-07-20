// let userForm = document.getElementById("user-form");
// let submitBtn = document.getElementById("submit-btn");

// // TEST FUNCTION BUTTONS
// // ONCLICK
// let showSubMenu1 = document.getElementById("show-submenu-1");

// function showDespMenu() {
//   window.location.href = "http://127.0.0.1:5500/";
// }

// showSubMenu1.addEventListener("click", () => {
//   showDespMenu();
// });

// console.log(showSubMenu1);

// // TEST API

// // submitBtn.addEventListener("click", () => {
// //   event.defaultPrevented;
// //   if (userForm == true) {
// //     let userData = {
// //       emailAddres: userForm[0],
// //       password: JSON(),
// //     };
// //     console.log(userData);

// // Pruba consumir api

// let api = fetch()

// console.log(api)

// COMPROBAR USUSARIO Y DIRIGIR A PÁGINA PRINCIPAL

let usuarios = {
  correo: "vinicioyyanza@gmail.com",
  contraseña: "admin",
};

let user = document.getElementById("login-main");
let pass = document.getElementById("pass-main");
let loginBtn = document.getElementById("submit-btn");
let alertaUser = document.getElementById("alert-user").content;
let fragment = document.querySelector(".container");

function comprobarUser() {
  if (user.value === usuarios.correo && pass.value === usuarios.contraseña) {
    window.location.href =
      "http://127.0.0.1:5500/mainPage/activeSoundMain.html";
  } else {
    const clonar = alertaUser.cloneNode(true);
    fragment.appendChild(clonar);
    console.log("el usuario no es correcto");
  }
}

loginBtn.addEventListener("click", () => {
  event.preventDefault();
  comprobarUser();
});

// funcion botones cerrar o regresar
const backBtn = document.getElementById("back-login-page");

backBtn.addEventListener('click', ()=>   window.location.href =
"http://127.0.0.1:5500/mainPage/activeSoundMain.html")
//consumir api para consumir listas de musicas

