let allBoxes = document.querySelectorAll(".box");
mode = "player-one";
allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if ((mode = "player-one")) {
      box.classList.remove("player-two");
      box.classList.add("x-fill");
      mode = "player-two";
    }
    if ((mode = "player-two")) {
      box.classList.remove("box");
      box.classList.add("o-fill");
      mode = "player-one";
    }
  });
});
