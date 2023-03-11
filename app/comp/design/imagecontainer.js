import Image from "next/image";


const ImageContainer = (props) => {

    const {src, alt} = props


    return ( 
        
        <div style={{width: "90%", marginLeft: "auto", marginRight: "auto", height: "300px", overflow: 'hidden', position: "relative", zIndex: "-1", marginTop: "1rem", marginBottom: "1rem", borderRadius: "3vmin"}}>
            <Image src={src} alt={alt} fill cover  style={{objectFit: "contain", objectPosition:"50% 50%"}}/>
        </div>
        
     );
}
 
export default ImageContainer;