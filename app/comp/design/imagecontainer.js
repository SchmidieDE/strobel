import Image from "next/image";
import { useMediaQuery } from "@mui/material"

// Tiny 1x1 blurred placeholder
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFBABAAAAAAAAAAAAAAAAAAAACf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="

const ImageContainer = ({src, alt, priority = false}) => {

    const matches = useMediaQuery('(min-width:600px)');
    const matchesBig = useMediaQuery('(min-width:1050px)');

    const height = matchesBig ? "420px" : matches ? "320px" : "220px";

    return (
        <div className="img-hover-zoom" style={{
            display: "block",
            width: "90%",
            margin: "auto",
            marginBottom: "1.5rem",
            borderRadius: "16px",
            height,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 2px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        }}>
            <Image
                src={src}
                alt={alt}
                fill
                style={{objectFit: "cover"}}
                sizes="(max-width: 600px) 90vw, (max-width: 1050px) 540px, 810px"
                priority={priority}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
            />
        </div>
    );
}

export default ImageContainer;
