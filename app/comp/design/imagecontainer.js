import Image from "next/image";

import { useMediaQuery } from "@mui/material"


const ImageContainer = (props) => {

    const {src, alt} = props

    const matches = useMediaQuery('(min-width:600px)');

    return ( 
        <>
        
        {
            matches ? 
            <div style={{display: "block", width: "90%",margin: "auto", marginBottom: "1rem", borderRadius: "3vmin", height: "320px",  overflow: "hidden", position: "relative", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                <Image src={src} alt={alt}  /*width={width}  height={height}*/ fill cover style={{objectFit: "cover"}} />
            </div>
            :
            <div style={{display: "block", width: "90%",margin: "auto", marginBottom: "1rem", borderRadius: "3vmin", height: "220px",  overflow: "hidden", position: "relative", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                <Image src={src} alt={alt}  /*width={width}  height={height}*/ fill cover style={{objectFit: "cover"}} />
            </div>
        
        
        } 
        </>
     );
}
 
export default ImageContainer;