

const Subtext = (props) => {

    const {text} = props

    return ( 
    <div style={{display: "block", width: "100%"}}>
        <div style={{width: "90%", margin: "auto"}}>
        <p style={{display: "inline-block"}}>
            {text}
        </p>
    </div>
    </div>
    );
}
 
export default Subtext;