import { autoScroll, searchClicked } from "./modules/events.js";
import { initCarouselSlide } from "./modules/carousel.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("App is running!");
  document
    .querySelector("#searchButton")
    .addEventListener("click", searchClicked);
  document.querySelector("#searchInput").addEventListener("click", autoScroll);

  initCarouselSlide();
}
