const yes = document.getElementById("yes");
const submit = document.getElementById("submit");
const right = document.getElementById("right");
const text = document.getElementById("text");

submit.onclick = () => {
  if (yes.checked) {
    right.classList.toggle("container");
    text.value = "yes";
  } else {
    right.className = "right";
    text.value = "no";
  }
};
