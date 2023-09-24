const endpoint = "https://musicbase-app.azurewebsites.net/api/v1";
// const endpoint = "http://localhost:3000/api/v1";

async function getSearchedArtists(searchBy, searchValue) {
  const response = await fetch(
    `${endpoint}/artists?${searchBy}=${searchValue}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const artists = await response.json();
  return artists;
}

async function getSearchedAlbums(searchBy, searchValue) {
  const response = await fetch(
    `${endpoint}/albums/artists?${searchBy}=${searchValue}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const albums = await response.json();
  return albums;
}

async function getSearchedSongs(searchBy, searchValue) {
  const response = await fetch(
    `${endpoint}/songs/albums/artists?${searchBy}=${searchValue}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const songs = await response.json();
  return songs;
}

export { getSearchedArtists, getSearchedAlbums, getSearchedSongs };
