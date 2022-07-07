import React from 'react'
import Song from './Song.js';



const SongCollection = (props) =>{
    // debugger
    const allTheSongs = props.songsArray.map((song) => {
        return (
            <Song 
                key = {song.id}
                song={song}
                songSelected={props.songSelected}
                setSongSelected={props.setSongSelected}
            />

        )
    })

    return(
        <div className='small-6 cell'>
         <h1>Songs</h1>
         {allTheSongs}
        </div>
    )

}

export default SongCollection