function reorderList() {
  const list = document.getElementById("interestList");
  const items = Array.from(list.getElementsByTagName("li"));

  // Shuffle using Fisher-Yates algorithm
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  list.innerHTML = "";
  items.forEach((item) => list.appendChild(item));
}

document.addEventListener("keydown", function (e) {
  const links = Array.from(document.querySelectorAll("a"));
  const current = document.activeElement;
  const currentIndex = links.indexOf(current);

  if (
    e.key === "ArrowDown" &&
    currentIndex !== -1 &&
    currentIndex < links.length - 1
  ) {
    e.preventDefault();
    links[currentIndex + 1].focus();
  } else if (e.key === "ArrowUp" && currentIndex > 0) {
    e.preventDefault();
    links[currentIndex - 1].focus();
  }
});
