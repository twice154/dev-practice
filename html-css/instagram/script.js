const toggleThemeBtn = document.querySelector(".header__theme-button");

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("darkTheme");
});
