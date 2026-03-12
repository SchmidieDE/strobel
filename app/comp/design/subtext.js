const Subtext = (props) => {

    const {text, variant} = props

    const css = {
        white: {
            display: "inline-block",
            margin: "0px",
            marginBottom: "1.2rem",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: "1.65",
            color: "#333",
            fontWeight: "400",
        },
        green: {
            display: "inline-block",
            color: "rgba(255,255,255,0.92)",
            margin: "0px",
            marginBottom: "1.2rem",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: "1.65",
            fontWeight: "400",
        },
        blue: {
            display: "inline-block",
            color: "rgba(255,255,255,0.92)",
            margin: "0px",
            marginBottom: "1.2rem",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: "1.65",
            fontWeight: "400",
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
