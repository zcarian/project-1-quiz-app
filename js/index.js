function changeIcon(obj) {
  bookmarkIcon = obj.target["src"];
  if (bookmarkIcon.endsWith("filled.png")) {
    obj.target["src"] = bookmarkIcon.replace("_filled", "");
  } else {
    obj.target["src"] = bookmarkIcon.replace(".png", "_filled.png");
  }
}

document.querySelectorAll(".main-card__bookmark-button").forEach((el) => {
  el.addEventListener("click", (e) => {
    changeIcon(e);
  });
});
