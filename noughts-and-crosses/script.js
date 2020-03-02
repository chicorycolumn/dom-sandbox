const box_a = document.getElementsByClassName("box a")[0];

box_a.addEventListener("click", event => {
  event.target.innerText = "X";
});
