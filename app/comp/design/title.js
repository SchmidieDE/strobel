

const Titel = (props) => {

    const {text, variant} = props

    
    const css = {
        bigbold: {
            padding: "0px",
            margin: "0px",
            fontWeight: "800",
            margin: "0.8rem 0rem 0.8rem 0rem",
            fontSize: "1.4rem",
            textDecoration: "underline green 0.2rem",
        },
        bigcenter: {
            padding: "0px",
            margin: "0px",
            fontWeight: "800",
            paddingTop: "0px",
            margin: "0.8rem 0rem 0.8rem 0rem",
            fontSize: "2rem",
            textDecoration: "underline green 0.2rem",
            textAlign: "center"
        }
    }

    



    return ( <h1 style={css[variant]}>
        {text}
    </h1> );
}
 
export default Titel;