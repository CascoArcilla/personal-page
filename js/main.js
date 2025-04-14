let erLi = document.getElementsByClassName("e-r")[0];
let classLi = document.getElementsByClassName("class")[0];
let cuLi = document.getElementsByClassName("c-u")[0];

function showUmlIcon() {
  let aside = document.getElementsByClassName("target-uml")[0];
  aside.style.backgroundImage = "url('../assets/imgs/uml.png')";
}

function showERDiagram() {
  let aside = document.getElementsByClassName("target-uml")[0];
  aside.style.backgroundImage = "url('../assets/imgs/ER.jpg')";
}

function showClassDiagram() {
  let aside = document.getElementsByClassName("target-uml")[0];
  aside.style.backgroundImage = "url('../assets/imgs/class.jpg')";
}

function showCuDiagram() {
  let aside = document.getElementsByClassName("target-uml")[0];
  aside.style.backgroundImage = "url('../assets/imgs/cu.webp')";
}

erLi.addEventListener("mouseenter", showERDiagram);
erLi.addEventListener("mouseleave", showUmlIcon);

classLi.addEventListener("mouseenter", showClassDiagram);
classLi.addEventListener("mouseleave", showUmlIcon);

cuLi.addEventListener("mouseenter", showCuDiagram);
cuLi.addEventListener("mouseleave", showUmlIcon);
