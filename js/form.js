const form = document.querySelector('[data-js="form"]');
// const main = document.getElementById('main')
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  creatQuestionCard(data);
  document.getElementById("answerAmountLeft").innerText = 150;
  document.getElementById("questionAmountLeft").innerText = 150;
  window.scrollTo(0, document.body.scrollHeight);
  e.target.reset();
  // console.log(question, answer, tag);
});

function creatQuestionCard(object) {
  const newCard = document.createElement("section");
  newCard.classList.add("main-card");
  newCard.classList.add("container");

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("main-card__question");
  newQuestion.innerText = object.question;
  newCard.append(newQuestion);

  const answerButton = document.createElement("button");
  answerButton.classList.add("main-card__answer-button");
  answerButton.innerText = "Show answer";
  newCard.append(answerButton);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("question-card__answer");
  newAnswer.classList.add("hidden");
  newAnswer.innerText = object.answer;
  newCard.append(newAnswer);

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("main-card__bookmark-button");

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.classList.add("icon");
  bookmarkIcon.setAttribute("src", "assets/bookmark_filled.png");
  bookmarkIcon.setAttribute("alt", "Bookmark");
  bookmarkButton.append(bookmarkIcon);
  newCard.append(bookmarkButton);

  const newTag = document.createElement("li");
  newTag.innerText = object.tag;

  const newTagList = document.createElement("ul");
  newTagList.classList.add("main-card__tags");
  newTagList.append(newTag);
  newCard.append(newTagList);
  main.append(newCard);
}

const inputQuestion = document.getElementById("question");

const inputAnswer = document.getElementById("answer");

inputQuestion.addEventListener("input", (e) => {
  document.getElementById("questionAmountLeft").innerText =
    150 - document.getElementById("question").value.length;
});

inputAnswer.addEventListener("input", (e) => {
  document.getElementById("answerAmountLeft").innerText =
    150 - document.getElementById("answer").value.length;
});
