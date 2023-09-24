import { fetchArtists, fetchAlbumsWithArtists, fetchSongs } from "./api.js";
import { renderResults } from "./render.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", performSearch);
});

async function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const artists = await fetchArtists();
  const albums = await fetchAlbumsWithArtists();
  const songs = await fetchSongs();

  let results = [];
  // Search artists
  for (let artist of artists) {
    if (artist.artistName.toLowerCase().includes(query)) {
      results.push(artist);
    }
  }
  // Search albums
  for (let album of albums) {
    if (album.albumName.toLowerCase().includes(query)) {
      results.push(album);
    }
  }
  // Search songs
  for (let song of songs) {
    if (song.songName.toLowerCase().includes(query)) {
      results.push(song);
    }
  }

  renderResults(results);
}

export { performSearch };
