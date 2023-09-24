function renderResults(results) {
  const resultsContainer =
    document.getElementById("searchResults") || document.createElement("div");
  resultsContainer.id = "searchResults";
  let resultsHtml = "";

  for (let item of results) {
    if (item.artistName) {
      // If artist
      resultsHtml += `
        <div class="artistCard">
          <img src="${item.artistImage}" alt="${item.artistName}">
          <div class="artistName">${item.artistName}</div>
          <div class="artistDescription">${item.artistDescription}</div>
        </div>
      `;
    } else if (item.albumName) {
      // If album
      resultsHtml += `
        <div class="albumCard">
          <img src="${item.albumImage}" alt="${item.albumName}">
          <div class="albumName">${item.albumName}</div>
          <div class="albumReleaseDate">${item.albumReleaseDate}</div>
        </div>
      `;
    } else if (item.songName) {
      // If song
      resultsHtml += `
        <div class="songCard">
          <div class="songName">${item.songName}</div>
          <div class="songDuration">${item.songDuration}</div>
        </div>
      `;
    }
  }

  resultsContainer.innerHTML = resultsHtml || "No results found.";

  if (!document.getElementById("searchResults")) {
    const mainContainer = document.querySelector(".mainContainer");
    mainContainer.insertAdjacentElement("beforeend", resultsContainer);
  }
}

export { renderResults };
