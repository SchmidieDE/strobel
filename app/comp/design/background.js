const topColor = {
    green: "#529D44",
    blue: "#14306B",
}

const Background = ({children, variant}) => {

    const color = topColor[variant]

    const css={
        green: {
            backgroundColor: color,
            background: `linear-gradient(180deg, ${color} 0%, #3d7a32 60%, #2d5e25 100%)`,
            paddingTop: "1.5rem",
            paddingBottom: "3.5rem",
            borderRadius: "0 0 24px 24px",
            marginBottom: "2.5rem"
        },
        blue: {
            backgroundColor: color,
            background: `linear-gradient(180deg, ${color} 0%, #0F265C 60%, #091a42 100%)`,
            paddingTop: "1.5rem",
            paddingBottom: "3.5rem",
            borderRadius: "0 0 24px 24px",
            marginBottom: "2.5rem"
        }
    }

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-5px", marginTop: "-30px", display: "block"}} viewBox="0 0 1440 320">
            <path fill={color} d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,218.7C840,235,960,277,1080,266.7C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div style={{...css[variant], marginTop: "-2px"}}>
            {children}
        </div>
        </>
     );
}

export default Background;
