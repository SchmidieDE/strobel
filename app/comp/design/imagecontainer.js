import Image from "next/image";
import { useMediaQuery } from "@mui/material"
import { useState } from "react"

const ImageContainer = ({src, alt, priority = false}) => {

    const matches = useMediaQuery('(min-width:600px)');
    const matchesBig = useMediaQuery('(min-width:1050px)');
    const [loaded, setLoaded] = useState(false)

    const height = matchesBig ? "460px" : matches ? "340px" : "240px";

    return (
        <div className={`img-hover-zoom ${!loaded ? "img-shimmer" : ""}`} style={{
            display: "block",
            width: "90%",
            margin: "auto",
            marginBottom: "1.5rem",
            borderRadius: "16px",
            height,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.03)",
            backgroundColor: "#e0e0e0",
        }}>
            <Image
                src={src}
                alt={alt}
                fill
                style={{
                    objectFit: "cover",
                    transition: "opacity 0.5s ease",
                    opacity: loaded ? 1 : 0,
                }}
                sizes="(max-width: 600px) 90vw, (max-width: 1050px) 540px, 810px"
                priority={priority}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}

export default ImageContainer;
