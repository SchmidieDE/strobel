import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { IconButton } from "@mui/material";
import { useState, useRef, useEffect } from "react";


const Videocontainer = ({linkhref, color, variant}) => {

    const videoref = useRef(null);
    const wrapperref = useRef(null);

    const [muted, setMuted] = useState(true);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = wrapperref.current;
        if (!node || inView) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px", threshold: 0 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [inView]);

    const handleMute = () => {
        if (!videoref.current) return;
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
        <div ref={wrapperref} style={{position: "relative", width: "90%", margin: "auto"}}>
            {inView && (
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
            )}
            {inView ? (
                <video ref={videoref} muted autoPlay playsInline loop={!muted} preload="auto" style={videoStyle}>
                    <source src={linkhref} type="video/mp4" />
                </video>
            ) : (
                <div className="img-shimmer" style={{...videoStyle, width: "100%"}} aria-hidden="true" />
            )}
        </div>
    )
}

export default Videocontainer;
