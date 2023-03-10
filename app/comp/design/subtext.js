

const Subtext = (props) => {

    const {text, variant} = props


    const css = {
        white: {
            display: "inline-block"
        },
        green: {
            display: "inline-block",
            color: "white"
        },
        blue: {
            display: "inline-block",
            color: "white"
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