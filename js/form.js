const form = document.querySelector('[data-js="form"]');

const main = document.querySelector('[data-js="main"]');

const answerAmountLeft = document.getElementById("answerAmountLeft");
const questionAmountLeft = document.getElementById("questionAmountLeft");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  creatQuestionCard(data);
  answerAmountLeft.innerText = 150;
  questionAmountLeft.innerText = 150;
  window.scrollTo(0, document.body.scrollHeight);
  e.target.reset();
  // e.target.question.focus();
});

function creatQuestionCard(object) {
  const tagArray = object.tag.split(" ");

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
  bookmarkIcon.setAttribute("src", "assets/bookmark.png");
  bookmarkIcon.setAttribute("alt", "Bookmark");
  bookmarkButton.append(bookmarkIcon);
  newCard.append(bookmarkButton);

  const newTagList = document.createElement("ul");

  for (let i = 0; i < tagArray.length; i++) {
    console.log(tagArray[i]);
    const newTag = document.createElement("li");
    newTag.innerText = "#" + tagArray[i];
    newTagList.append(newTag);
  }

  newTagList.classList.add("main-card__tags");
  newCard.append(newTagList);
  main.append(newCard);
}

const inputQuestion = document.getElementById("question");

const inputAnswer = document.getElementById("answer");

inputQuestion.addEventListener("input", () => {
  questionAmountLeft.innerText =
    150 - document.getElementById("question").value.length;
});

inputAnswer.addEventListener("input", () => {
  answerAmountLeft.innerText =
    150 - document.getElementById("answer").value.length;
});
