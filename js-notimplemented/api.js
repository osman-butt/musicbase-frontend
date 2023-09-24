const endpoint = "https://musicbase-app.azurewebsites.net/api/v1";

async function fetchArtists() {
  const response = await fetch(`${endpoint}/artists`);
  return await response.json();
}

async function fetchAlbumsWithArtists() {
  const response = await fetch(`${endpoint}/albums/artists`);
  return await response.json();
}

async function fetchSongs() {
  const response = await fetch(`${endpoint}/songs`);
  return await response.json();
}

export { fetchArtists, fetchAlbumsWithArtists, fetchSongs };
