import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router-dom";

const Artist = ({
    id,
    artistName,
    numOfFans,
    Picture
}) => {

    let history = useHistory();

    const handleClick = () => { 
        console.log("artist clicked");    
        history.push("/view_artist/" + id);
    };



    return (

        <div className="artist" onClick={handleClick}>
        <div className="artistPicture"><img src={Picture}></img></div>
        <div className="artistName">{artistName}</div>
        <div className="artistNumberOfFans">Rank: {numOfFans}</div>
        </div>

      );
}
 
export default Artist;