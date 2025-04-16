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
