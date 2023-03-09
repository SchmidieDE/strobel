
const Subtitel = (props) => {
    
    const {text, variant} = props

    const css = {
        left: {
            backgroundColor: "green",
            width: "90%",
            borderTopRightRadius: "2vmin", 
            borderBottomRightRadius: "2vmin"
        },
        right: {
            backgroundColor: "green",
            width: "90%",
            float: "right",
            borderTopLeftRadius: "2vmin", 
            borderBottomLeftRadius: "2vmin"
        }, 
        leftText: {
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            padding: "0.5rem 0 0.5rem 0",
            margin: "0px"
        },
        rightText: {
            textAlign: "center",
            color: "white",
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