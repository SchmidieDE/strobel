import Image from "next/image";


const ImageContainer = (props) => {

    const {src, alt} = props


    return ( 
        
        <div style={{width: "90%", height: "150px", overflow: 'hidden', position: "relative", zIndex: "-1", marginBottom: "1rem" }}>
            <Image src={src} alt={alt} fill cover  style={{objectFit: "contain", objectPosition:"50% 50%"}}/>
        </div>
        
     );
}
 
export default ImageContainer;