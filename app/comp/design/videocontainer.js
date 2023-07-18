import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import Link from "next/link";
import { IconButton } from "@mui/material";
import { useState, useRef } from "react";


const Videocontainer = ({linkhref, color}) => {





   
    const videoref = useRef(null);
    
    const [muted, setMuted] = useState(true);
    const handleMute = () => {
        
        setMuted(!muted)
        if (muted) {
            videoref.current.play()
        } else {
            videoref.current.pause()
        } 
    }
        return (
            <div style={{position: "relative", width: "90%", margin: "auto"}}>
            
                <IconButton style={{position: "absolute", right: "0"}}>
                    {
                        muted ? <PlayArrowIcon onClick={handleMute} fontSize="large" style={{color: "white", backgroundColor: color, padding: "0.3rem",borderRadius: "1vmin", zIndex: 100}}/> 
                        : 
                        <PauseIcon onClick={handleMute} fontSize="large" style={{color: "white", backgroundColor: color, padding: "0.3rem",borderRadius: "1vmin", zIndex: 1}}/>
                    }
                </IconButton>
    
                <video ref={videoref} style={{display: "block", marginBottom: "1rem", borderRadius: "3vmin", height: "200px",  overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                    
                    <source src={`${linkhref}`} type="video/mp4" />
                </video>
            </div>)


}

export default Videocontainer;


