const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");
// function toggleDarkMode() {
//   if (isDarkModeOn) {
//     document.body.classList.add("dark-mode");
//   }
// }

// let isDarkModeOn;

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  //   isDarkModeOn = !isDarkModeOn;
  //   console.log("Dark mode:", isDarkModeOn);
});
