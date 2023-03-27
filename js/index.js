function changeIcon(obj) {
  bookmarkIcon = obj.target["src"];
  if (bookmarkIcon.endsWith("filled.png")) {
    obj.target["src"] = bookmarkIcon.replace("_filled", "");
  } else {
    obj.target["src"] = bookmarkIcon.replace(".png", "_filled.png");
  }
}
const bookmarkToggle = document.querySelectorAll(".main-card__bookmark-button");

bookmarkToggle.forEach((el) => {
  el.addEventListener("click", (e) => {
    changeIcon(e);
  });
});

const showAnswerToggle = document.querySelectorAll(".main-card__answer-button");

const answer = document.querySelectorAll(".question-card__answer");

showAnswerToggle.forEach((el, index) => {
  el.addEventListener("click", () => {
    answer[index].classList.toggle("hidden");
    textOnButton = showAnswerToggle[index].textContent;
    if (textOnButton === "Show answer") {
      showAnswerToggle[index].textContent = "Hide answer";
    } else {
      //if (textOnButton === "Hide answer")
      showAnswerToggle[index].textContent = "Show answer";
    }
  });
});
