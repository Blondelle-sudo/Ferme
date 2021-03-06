const togglerBtn = document.querySelector(".toggler");
const container = document.querySelector(".container");
const body = document.querySelector("body");

body.onload = () => { load();}

togglerBtn.addEventListener("click", function() {
  let theme = document.cookie.substr(6);

  if (theme !== null || theme !== undefined) {
    if (theme === "light")
      setTheme("dark");
    else
      setTheme("light");
  } else {
    setTheme(null);
  }
});

function load() {
  let theme = document.cookie.substr(6);

  setTheme(theme);
}

function setTheme(theme) {

  let date = new Date(Date.now() + 3600);
  date = date.toUTCString();

  if (theme === null || theme === undefined) {
    document.cookie = `theme=light; path=/; SameSite=None; Secure; expires=${date}`;
    /**
     * On peux aussi utiliser l'option max-age en lui passant la duree de validite
     * en seconde comme suite
     *
     * document.cookie = `theme=light; path=/; max-age=3600`;
     */

    container.classList.remove("theme-dark");
    togglerBtn.classList.remove("toggler-on");
  } else {
    document.cookie = `theme=${theme}; path=/; SameSite=None; Secure`;

    if (theme === "light") {
      container.classList.remove("theme-dark");

      togglerBtn.classList.remove("toggler-on");
    } else {
      container.classList.add("theme-dark");

      togglerBtn.classList.add("toggler-on");
    }
  }
}
