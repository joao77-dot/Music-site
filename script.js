const songs = {
    pop: [
        { file: 'songs/pop.mp3', title: 'Pop Song 1', artist: 'Pop Artist 1', cover: 'images/pop.jpg' }
    ],
    rock: [
        { file: 'songs/rock.mp3', title: 'Rock Song 1', artist: 'Rock Artist 1', cover: 'images/rock.jpg' }
    ],
    jazz: [
        { file: 'songs/jazz.mp3', title: 'Jazz Song 1', artist: 'Jazz Artist 1', cover: 'images/jazz.jpg' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    populateExploreList();
});

function filterSongs() {
    const genre = document.getElementById('genre').value;
    const playlist = document.getElementById('playlist');
    playlist.innerHTML = '';

    songs[genre].forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.onclick = () => playSong(song.file, song.title, song.artist, song.cover);
        playlist.appendChild(li);
    });
}

function populateExploreList() {
    const exploreList = document.getElementById('explore-list');
    exploreList.innerHTML = '';

    Object.keys(songs).forEach(genre => {
        songs[genre].forEach(song => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist} (${genre})`;
            li.onclick = () => playSong(song.file, song.title, song.artist, song.cover);
            exploreList.appendChild(li);
        });
    });
}

function playSong(file, title, artist, cover) {
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const albumArt = document.getElementById('album-art');

    audioPlayer.src = file;
    songTitle.textContent = title;
    artistName.textContent = artist;
    albumArt.src = cover;

    audioPlayer.play();
}
