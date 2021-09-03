import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router-dom";

const Album = ({
    id,
    title,
    cover,
    release_date
}) => {

    
    return (

        <div>
            <div className="Album">
                <div className="AlbumPicture"><img src={cover}></img></div>
                <div className="AlbumTitle">{title}</div>
                <div className="AlbumRelease">{release_date}</div>
            </div>

           
        </div>

      );
}
 
export default Album;