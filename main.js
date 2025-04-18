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
