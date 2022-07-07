import React from "react"

const Playlist = (props) => {

    let selectedClass = ""

    const updatePlaylistSelected = (event) => {
        console.log("updated!")
        props.setPlaylistSelected(props.id)
    }
    // debugger
    if(props.playlistSelected === props.id) {
        selectedClass = "selected"
    }

    return (
        <div onClick={updatePlaylistSelected} className={selectedClass}>
            <p>{props.name}</p>
        </div>
    )
}

export default Playlist
