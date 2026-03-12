const Subtitel = (props) => {

    const {text, variant} = props
    let backgroundProp = props.background || "default"

    let borderColor = "#4E9940"
    let titlecolor = "#4E9940"

    if (backgroundProp === "default") {
        borderColor = "#4E9940"
        titlecolor = "#333"
    }
    if (backgroundProp === "green") {
        borderColor = "rgba(255,255,255,0.6)"
        titlecolor = "white"
    }
    if (backgroundProp === "whiteblue" || backgroundProp === "#0F265C") {
        borderColor = "#0F265C"
        titlecolor = "#333"
    }
    if (backgroundProp === "blue") {
        borderColor = "rgba(255,255,255,0.6)"
        titlecolor = "white"
    }

    const css = {
        left: {
            borderLeft: `4px solid ${borderColor}`,
            paddingLeft: "1rem",
            marginBottom: "1rem",
            marginTop: "1.8rem",
            marginLeft: "5%",
        },
        right: {
            borderRight: `4px solid ${borderColor}`,
            paddingRight: "1rem",
            textAlign: "right",
            marginBottom: "1rem",
            marginTop: "1.8rem",
            marginRight: "5%",
            marginLeft: "auto",
            width: "fit-content",
        },
        leftText: {
            color: titlecolor,
            fontWeight: "700",
            padding: "0.3rem 0",
            margin: "0px",
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            letterSpacing: "-0.01em",
        },
        rightText: {
            color: titlecolor,
            fontWeight: "700",
            padding: "0.3rem 0",
            margin: "0px",
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            letterSpacing: "-0.01em",
        },
    }

    return (
        <div style={{display: "block", width: "100%", height: "100%"}}>
            <div style={css[variant]}>
                <h2 style={css[variant+"Text"]}>
                    {text}
                </h2>
            </div>
        </div>
    );
}

export default Subtitel;
