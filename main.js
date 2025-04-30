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
  // Only activate for ArrowUp or ArrowDown
  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;

  // Only run when focus is on an anchor or button
  const focusable = Array.from(document.querySelectorAll("a, button"));
  const active = document.activeElement;

  // Make sure the currently focused item is in the focusable list
  const index = focusable.indexOf(active);
  if (index === -1) return;

  e.preventDefault(); // prevent scrolling or other default behavior

  if (e.key === "ArrowDown" && index < focusable.length - 1) {
    focusable[index + 1].focus();
  }

  if (e.key === "ArrowUp" && index > 0) {
    focusable[index - 1].focus();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleHelp");
  const helpContent = document.getElementById("helpContent");

  if (toggleButton && helpContent) {
    toggleButton.addEventListener("click", () => {
      const isHidden = helpContent.hasAttribute("hidden");
      if (isHidden) {
        helpContent.removeAttribute("hidden");
        toggleButton.setAttribute("aria-expanded", "true");
      } else {
        helpContent.setAttribute("hidden", "");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
