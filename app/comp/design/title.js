const Titel = (props) => {

    const {text, variant} = props

    const css = {
        bigbold: {
            padding: "0px",
            margin: "0.8rem 0rem 0.8rem 0rem",
            fontWeight: "800",
            fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
            color: "#1a1a1a",
            position: "relative",
            display: "inline-block",
            letterSpacing: "-0.01em",
        },
        bigcenter: {
            padding: "0px",
            margin: "1.5rem 0rem 1.2rem 0rem",
            fontWeight: "800",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            textAlign: "center",
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
            position: "relative",
        }
    }

    return (
        <h1 style={css[variant]} className={`fade-in-up ${variant === "bigcenter" ? "title-accent title-accent-center" : "title-accent"}`}>
            {text}
        </h1>
    );
}

export default Titel;
