let galleryIndex = 0;

function slideImages() {
  const groups = document.querySelectorAll(".galleryGroup");

  if (galleryIndex + 1 >= groups.length) {
    galleryIndex = 0;
  } else {
    galleryIndex++;
  }

  for (let i = 0; i < groups.length; i++) {
    groups[i].style.transform = `translateX(-${galleryIndex * 75}rem)`;
  }
}

setInterval(slideImages, 5000);
