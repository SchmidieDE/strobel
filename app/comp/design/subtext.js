

const Subtext = (props) => {

    const {text, variant} = props


    const css = {
        white: {
            display: "inline-block",
            margin: "0px",
            marginBottom: "1rem",
            fontSize: "1.2rem",
            lineHeight: "1.4", 
        },
        green: {
            display: "inline-block",
            color: "white",
            margin: "0px",
            marginBottom: "1rem",
            fontSize: "1.2rem",
            lineHeight: "1.4", 
        },
        blue: {
            display: "inline-block",
            color: "white",
            margin: "0px",
            marginBottom: "1rem",
            fontSize: "1.2rem",
            lineHeight: "1.4", 
        }
    }


    return ( 
    <div style={{display: "block", width: "100%"}}>
        <div style={{width: "90%", margin: "auto"}}>
        <p style={css[variant]}>
            {text}
        </p>
    </div>
    </div>
    );
}
 
export default Subtext;