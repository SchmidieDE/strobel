import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const ImageContainer = ({ src, alt, priority = false }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const matchesBig = useMediaQuery('(min-width:1050px)');
    const isStaticImport = typeof src === "object";

    const [loaded, setLoaded] = useState(false);
    const showShimmer = !isStaticImport && !loaded;

    const height = matchesBig ? "460px" : matches ? "340px" : "240px";

    return (
        <div className={`img-hover-zoom ${showShimmer ? "img-shimmer" : ""}`} style={{
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
                style={{ objectFit: "cover" }}
                sizes="(max-width: 600px) 90vw, (max-width: 1050px) 540px, 810px"
                quality={80}
                priority={priority}
                {...(isStaticImport ? { placeholder: "blur" } : {})}
                {...(!isStaticImport ? { onLoad: () => setLoaded(true) } : {})}
            />
        </div>
    );
};

export default ImageContainer;
