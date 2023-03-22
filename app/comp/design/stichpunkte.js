import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Stichpunkte = (props) => {

    const {arr, variant} = props


    const css = {
        white: {
            display: "block",
            margin: "0px",
            marginBottom: "1rem",
            display: "flex",
            verticalAlgin: "middle",
            fontSize: "1.2rem",
        },
        green: {
            color: "white",
            margin: "0px",
            marginBottom: "1rem",
            display: "flex",
            verticalAlgin: "middle",
            fontSize: "1.2rem",
        },
        blue: {
            color: "white",
            margin: "0px",
            marginBottom: "1rem",
            display: "flex",
            verticalAlgin: "middle",
            fontSize: "1.2rem",
        },
        whiteradio: {
            display: "inline",
            verticalAlign: "center",
        }
    }


    return ( 
    <div style={{display: "block", width: "100%", marginBottom: "2rem" }}>
        <div style={{width: "90%", margin: "auto"}}>
        
        <ul style={{paddingLeft: "3vmin"}}>
        {
        arr.map((e, index) => {
            return (
            <li style={css[variant]}>
                <RadioButtonCheckedIcon fontSize="small" style={css[variant+"radio"]} /><span style={{display: "block", marginTop: "auto", marginBottom: "auto", marginLeft: "0.5rem", fontWeight: "600"}}>{e}</span>
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