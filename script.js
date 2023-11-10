const theme_btn = document.getElementById("theme");

let update_theme = () => {
  let data = localStorage.getItem("theme");
  if (data) {
    document.body.classList.add("darkTheme");
    theme_btn.src = "imgs/moon.png";
  }
};

theme_btn.onclick = () => {
  document.body.classList.toggle("darkTheme");

  if (document.body.classList.contains("darkTheme")) {
    theme_btn.src = "imgs/moon.png";

    localStorage.setItem("theme", "darkTheme");
  } else {
    theme_btn.src = "imgs/sun.png";

    localStorage.removeItem("theme");
  }
};
update_theme();
