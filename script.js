const yes = document.getElementById("yes");
const submit = document.getElementById("submit");
const right = document.getElementById("right");

submit.onclick = () => {
  if (yes.checked) {
    right.classList.toggle("container");
  }
};
