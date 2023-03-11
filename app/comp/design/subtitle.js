
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
            backgroundColor: backgroundcolor,
            width: "90%",
            borderTopRightRadius: "2vmin", 
            borderBottomRightRadius: "2vmin",
            marginBottom: "1rem",
            marginTop: "1rem"
        },
        right: {
            backgroundColor: backgroundcolor,
            width: "90%",
            float: "right",
            borderTopLeftRadius: "2vmin", 
            borderBottomLeftRadius: "2vmin",
            marginBottom: "1rem",
            marginTop: "1rem"
        }, 
        leftText: {
            textAlign: "center",
            color: titlecolor,
            fontWeight: "600",
            padding: "0.5rem 0 0.5rem 0",
            margin: "0px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        },
        rightText: {
            textAlign: "center",
            color: titlecolor,
            fontWeight: "600",
            padding: "0.5rem 0 0.5rem 0",
            margin: "0px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        },
    }


    return ( <>
        <div style={{display: "block", width: "100%", height: "100%"}}>
        <div style={css[variant]}>
            <h2 style={css[variant+"Text"]}>
                {text}
            </h2>
        </div>
        </div>
    </> );
}
 
export default Subtitel;