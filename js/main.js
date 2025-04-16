/* Move to exact point of secction by id in page */
function movePageTo(idSecction) {
  let heightNav = document.getElementsByClassName("nav-ul")[0].clientHeight;
  let marginTopTargetPostion = 20;

  if (idSecction == "inicio") {
    scrollTo({ top: 0 });
    return;
  }

  let positionY = document
    .getElementById(idSecction)
    .getBoundingClientRect().top;
  let targetPosition = positionY - heightNav - marginTopTargetPostion;

  scrollBy({ top: targetPosition });
}

/* Change icon  diagram */
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
