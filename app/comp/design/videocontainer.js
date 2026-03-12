import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { IconButton } from "@mui/material";
import { useState, useRef } from "react";


const Videocontainer = ({linkhref, color, variant}) => {

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

    const videoStyle = {
        display: "block",
        marginBottom: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "16px",
        height: variant === "Hochkant" ? "400px" : "200px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
    }

    return (
        <div style={{position: "relative", width: "90%", margin: "auto"}}>
            <IconButton
                onClick={handleMute}
                aria-label={muted ? "Video abspielen" : "Video pausieren"}
                style={{position: "absolute", right: "8px", top: "8px", zIndex: 10}}
            >
                {
                    muted
                    ? <PlayArrowIcon fontSize="large" style={{color: "white", backgroundColor: color, padding: "0.3rem", borderRadius: "8px"}}/>
                    : <PauseIcon fontSize="large" style={{color: "white", backgroundColor: color, padding: "0.3rem", borderRadius: "8px"}}/>
                }
            </IconButton>
            <video ref={videoref} muted autoPlay playsInline loop={!muted} style={videoStyle}>
                <source src={linkhref} type="video/mp4" />
            </video>
        </div>
    )
}

export default Videocontainer;
