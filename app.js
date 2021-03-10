window.addEventListener("DOMContentLoaded", () => {
  click();
});

function click() {
  const text = document.getElementById("text");
  const button = document.createElement("button");
  let count = 0;
  const countDiv = document.createElement("div");
  countDiv.innerHTML = store.count;
  button.innerText = "Click Me";
  text.append(button, countDiv);

  button.addEventListener("click", () => {
    increaseCount();
  });
}

function increaseCount() {
  store.count++
}

const store = {
  count: 0,
};
