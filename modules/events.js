import { showArtists, showAlbums, showSongs } from "./views.js";
import {
  getSearchedArtists,
  getSearchedAlbums,
  getSearchedSongs,
} from "./rest-services.js";

function autoScroll() {
  const element = document.getElementById("searchInput");
  element.scrollIntoView();
}

async function searchClicked(event) {
  const searchValue = document.querySelector("#searchInput").value;
  const searchBy = document.querySelector("#sortOptions").value;
  console.log(searchValue);
  console.log(searchBy);
  const artists = await getSearchedArtists(searchBy, searchValue);
  const albums = await getSearchedAlbums(searchBy, searchValue);
  const songs = await getSearchedSongs(searchBy, searchValue);
  //   console.log(artists);
  //   console.log(albums);
  //   console.log(songs);
  showArtists(artists);
  showAlbums(albums);
  showSongs(songs);
}

export { autoScroll, searchClicked };
