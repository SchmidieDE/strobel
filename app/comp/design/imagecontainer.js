import Image from "next/image";


const ImageContainer = (props) => {

    const {src, alt} = props


    return ( 
        /**
        <div style={{width: "90%", marginLeft: "auto", marginRight: "auto",height: "300px", overflow: 'hidden', position: "relative", zIndex: "-1", marginTop: "1rem", marginBottom: "1rem", borderRadius: "3vmin"}}>
            <Image src={src} alt={alt} fill cover  style={{objectFit: "contain", objectPosition:"50% 50%"}}/>
        </div>
         */
            <div style={{display: "block", width: "90%",margin: "auto", marginBottom: "1rem", borderRadius: "3vmin", height: "220px",  overflow: "hidden", position: "relative", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                <Image src={src} alt={alt}  /*width={width}  height={height}*/ fill cover style={{objectFit: "cover"}} />
            </div>
     );
}
 
export default ImageContainer;