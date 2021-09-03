import React, { Component } from 'react';

const Album = ({
    id,
    title,
    cover,
    release_date
}) => {

    
    const getOnlyYear = (release_date) => {
        return release_date.slice(0,4);
    }

    
    return (

        <div>
            <div className="Album">
                <div className="AlbumPicture"><img src={cover}></img></div>
                <div className="AlbumTitle">{title}</div>
                <div className="AlbumRelease">{getOnlyYear(release_date)}</div>
            </div>

           
        </div>

      );
}
 
export default Album;