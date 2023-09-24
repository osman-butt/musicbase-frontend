import { searchClicked } from "./modules/events.js";
import { initCarouselSlide } from "./modules/carousel.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("App is running!");
  document
    .querySelector("#searchform")
    .addEventListener("submit", searchClicked);

  initCarouselSlide();
}
