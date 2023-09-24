function showArtists(artists) {
  document.querySelector("#artists-container").innerHTML = "";
  artists.forEach(showArtist);
}

function showAlbums(albums) {
  document.querySelector("#albums-container").innerHTML = "";
  albums.forEach(showAlbum);
}

function showSongs(songs) {
  const table = document.querySelector("#songs-container");
  table.innerHTML = "";
  table.insertAdjacentHTML(
    "beforeend",
    /*html*/ `  <tr>
    <th>Song</th>
    <th>Duration</th>
    <th>Artists</th>
    <th>Feat</th>
    <th>Album</th>
  </tr>`
  );

  songs.forEach(showSong);
}

function showArtist(artist) {
  const grid = document.querySelector("#artists-container");
  const html = /*html*/ `
    <article class="grid-item">
      <img src="${artist.artistImage}" />
      <h3>${artist.artistName}</h3>
      <p>${artist.artistDescription}</p>
    </article>
  `;
  grid.insertAdjacentHTML("beforeend", html);
}

function showAlbum(album) {
  const grid = document.querySelector("#albums-container");
  const artists = album.artists.map(artist => artist.artistName);
  const html = /*html*/ `
    <article class="grid-item">
      <img src="${album.albumImage}" />
      <h3>${album.albumName}</h3>
      <p>${artists.join(", ")}</p>
      <p>${album.albumReleaseDate}</p>
    </article>
  `;
  grid.insertAdjacentHTML("beforeend", html);
}

function showSong(song) {
  const grid = document.querySelector("#songs-container");
  const artists = song.artists.map(artist => artist.artistName);
  const featArtists = song.featuredArtists.map(artist => artist.artistName);
  const html = /*html*/ `
    <tr class="table-row">
      <td class="col1">${song.songName}</td>
      <td class="col2">${song.songDuration}</td>
      <td class="col3">${artists.join(", ")}</td>
      <td class="col4">${featArtists.join(", ")}</td>
      <td class="col5">${song.albumName}</td>
    </tr>
  `;
  grid.insertAdjacentHTML("beforeend", html);
}

export { showArtists, showAlbums, showSongs };
