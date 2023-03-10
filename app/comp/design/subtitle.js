
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
            borderBottomRightRadius: "2vmin"
        },
        right: {
            backgroundColor: backgroundcolor,
            width: "90%",
            float: "right",
            borderTopLeftRadius: "2vmin", 
            borderBottomLeftRadius: "2vmin"
        }, 
        leftText: {
            textAlign: "center",
            color: titlecolor,
            fontWeight: "600",
            padding: "0.5rem 0 0.5rem 0",
            margin: "0px"
        },
        rightText: {
            textAlign: "center",
            color: titlecolor,
            fontWeight: "600",
            padding: "0.5rem 0 0.5rem 0",
            margin: "0px"
        },
    }


    return ( <>
        <div style={{display: "block", width: "100%"}}>
        <div style={css[variant]}>
            <h2 style={css[variant+"Text"]}>
                {text}
            </h2>
        </div>
        </div>
    </> );
}
 
export default Subtitel;