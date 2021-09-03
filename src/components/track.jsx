import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router-dom";

const Track = ({
    id,
    title,
    duration,
    index
}) => {


    const toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10)
        var hours   = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60
    
        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }

    
    return (

        <div>
            <div className="track">
                <div className="trackTitle">{index}. {title}</div>
                <div className="trackDuration">{toHHMMSS(duration)}</div>
            </div>

            <div className="clear"></div>
        </div>

      );
}
 
export default Track;