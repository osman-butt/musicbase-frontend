import { showArtists, showAlbums, showSongs } from "./views.js";
import {
  getSearchedArtists,
  getSearchedAlbums,
  getSearchedSongs,
} from "./rest-services.js";

async function searchClicked(event) {
  event.preventDefault();
  const searchValue = document.querySelector("#searchInput").value;
  const searchBy = document.querySelector("#searchType").value;
  console.log(searchValue);
  console.log(searchBy);
  const artists = await getSearchedArtists(searchBy, searchValue);
  const albums = await getSearchedAlbums(searchBy, searchValue);
  const songs = await getSearchedSongs(searchBy, searchValue);
  showArtists(artists);
  showAlbums(albums);
  showSongs(songs);
}

export { searchClicked };
