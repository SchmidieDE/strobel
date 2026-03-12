const Subtitel = (props) => {

    const {text, variant} = props
    let backgroundcolor = props.background || "#4E9940"
    let titlecolor = "white"

    if (backgroundcolor === "green") {
        backgroundcolor = "white"
        titlecolor = "#4E9940"
    }
    if (backgroundcolor === "whiteblue") {
        backgroundcolor = "#0F265C"
        titlecolor = "white"
    }
    if (backgroundcolor === "blue") {
        backgroundcolor = "white",
        titlecolor = "#0F265C"
    }

    const css = {
        left: {
            background: backgroundcolor === "white"
                ? backgroundcolor
                : `linear-gradient(135deg, ${backgroundcolor} 0%, ${backgroundcolor}dd 100%)`,
            width: "90%",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            marginBottom: "1rem",
            marginTop: "1.5rem"
        },
        right: {
            background: backgroundcolor === "white"
                ? backgroundcolor
                : `linear-gradient(135deg, ${backgroundcolor}dd 0%, ${backgroundcolor} 100%)`,
            width: "90%",
            float: "right",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            marginBottom: "1rem",
            marginTop: "1.5rem"
        },
        leftText: {
            textAlign: "center",
            color: titlecolor,
            fontWeight: "700",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            padding: "0.6rem 0",
            margin: "0px",
            fontSize: "1.15rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        },
        rightText: {
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            textAlign: "center",
            color: titlecolor,
            fontWeight: "700",
            padding: "0.6rem 0",
            margin: "0px",
            fontSize: "1.15rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
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
