import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Stichpunkte = (props) => {

    const {arr, variant} = props

    const css = {
        white: {
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            color: "#333",
        },
        green: {
            display: "flex",
            alignItems: "flex-start",
            color: "rgba(255,255,255,0.92)",
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
        },
        blue: {
            display: "flex",
            alignItems: "flex-start",
            color: "rgba(255,255,255,0.92)",
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
        },
    }

    const iconColor = variant === "white" ? "#4E9940" : "rgba(255,255,255,0.85)"

    return (
    <div style={{display: "block", width: "100%", marginBottom: "2rem" }}>
        <div style={{width: "90%", margin: "auto"}}>

        <ul style={{paddingLeft: "3vmin", listStyle: "none"}}>
        {
        arr.map((e, index) => {
            return (
            <li style={css[variant]} key={index}>
                <CheckCircleOutlineIcon sx={{ fontSize: 20, flexShrink: 0, marginTop: "3px" }} style={{ color: iconColor }} />
                <span style={{display: "block", marginTop: "auto", marginBottom: "auto", marginLeft: "0.6rem", fontWeight: "500", lineHeight: "1.5"}}>{e}</span>
            </li>
            )
        })
        }
        </ul>
    </div>
    </div>
    );
}

export default Stichpunkte;
