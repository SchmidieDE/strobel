const Titel = (props) => {

    const {text, variant} = props

    const css = {
        bigbold: {
            padding: "0px",
            margin: "0.8rem 0rem 0.8rem 0rem",
            fontWeight: "800",
            fontSize: "1.4rem",
            textDecorationLine: "underline",
            textDecorationColor: "#4E9940",
            textDecorationThickness: "3px",
            textUnderlineOffset: "4px",
        },
        bigcenter: {
            padding: "0px",
            margin: "1rem 0rem 1rem 0rem",
            fontWeight: "800",
            fontSize: "2rem",
            textDecorationLine: "underline",
            textDecorationColor: "#4E9940",
            textDecorationThickness: "3px",
            textUnderlineOffset: "6px",
            textAlign: "center",
            color: "#1a1a1a",
        }
    }

    return (
        <h1 style={css[variant]} className="fade-in-up">
            {text}
        </h1>
    );
}

export default Titel;
