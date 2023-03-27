const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(question, answer, tag);
});

function creatQuestionCard(object) {
  const question = object.question;
  const answer = object.answer;
  const tag = object.tag;
}
