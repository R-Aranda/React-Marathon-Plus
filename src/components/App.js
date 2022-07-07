import React, {useState} from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  
  const playlists = props.data.playlists
  const songs = props.data.songs

  const [playlistSelected, setPlaylistSelected] = useState("")
  const [songSelected, setSongSelected] = useState("")


  return (
    <div className='grid-container app '>
        <h1 className="title">React Music Player</h1>
          <div className="grid-x grid-margin-x grid-padding-x">
           <PlaylistCollection playlistArray={playlists} playlistSelected={playlistSelected} setPlaylistSelected={setPlaylistSelected} />

           <SongCollection
            songsArray={songs}
            songSelected={songSelected}
            setSongSelected={setSongSelected}
           />
      </div>
    </div>
  );
}

export default App
