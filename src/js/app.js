/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Denyl Marc Bensan
 *      Student ID: 171309222
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

document.addEventListener("DOMContentLoaded", () => {
  function showArtists() {
    const selectedArtist = document.querySelector("#menu");

    artists.forEach((artist, index) => {
      const chosen = document.createElement("button");
      chosen.innerHTML = artist.name;
      chosen.addEventListener("click", () => showDetails(index));
      selectedArtist.appendChild(chosen);
    });
  }

  function showDetails(artistIndex) {
    const artist = artists[artistIndex];
    const chosenArtist = document.querySelector("#selected-artist");

    chosenArtist.innerHTML = `${artist.name} (<a href="${artist.urls[0].url}" target="_blank">${artist.urls[0].name}</a>, <a href="${artist.urls[1].url}" target="_blank">${artist.urls[1].name}</a>)`;

    const content = document.querySelector("#songs");
    content.innerHTML = "";

    for (const song of songs.filter((arr) => arr.artistId === artist.artistId)) {
      const rows = document.createElement("tr");

      const songName = document.createElement("td");
      const songLink = document.createElement("a");
      songLink.href = song.url;
      songLink.innerHTML = song.title;
      songName.appendChild(songLink);

      const songYear = document.createElement("td");
      songYear.innerHTML = song.year;

      const songDuration = document.createElement("td");
      songDuration.textContent = `${Math.floor(song.duration / 60)}:${(song.duration % 60)
        .toString()
        .padStart(2, "0")}`;

      rows.appendChild(songName);
      rows.appendChild(songYear);
      rows.appendChild(songDuration);

      content.appendChild(rows);
    }
  }

  showArtists();
});
