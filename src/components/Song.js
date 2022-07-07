import React from 'react';


const Song = (props) => {
    // console.log(props)

    let selectedClass = ""

    const updateSongSelected = (event) => {
        props.setSongSelected(props.song.id)
    }

    if (props.songSelected == props.song.id) {
        selectedClass = "selected"
    }

    return ( 
        <div onClick={updateSongSelected} className={selectedClass} >
            <p>{props.song.name} - {props.song.artist}</p>
        </div>
    );
}
 
export default Song;