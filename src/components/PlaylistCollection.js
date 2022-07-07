import React from "react"
import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
    const allThePlaylists = props.playlistArray.map((playlist) =>{
        return(
            <Playlist 
                name={playlist.name} 
                id={playlist.id} 
                key={playlist.id} 
                playlistSelected={props.playlistSelected} 
                setPlaylistSelected={props.setPlaylistSelected} 
            />
        )
    })


    return(
        <div className="small-6 cell">
            <h1>Playlist</h1>
            {allThePlaylists}
            {/* <Playlist
            workoutPlaylist = { props.playlistArray[0] }/> */}
        </div>
    )
}

export default PlaylistCollection