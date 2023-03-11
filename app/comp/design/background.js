


const Background = ({children, variant}) => {


    const css={
        green: {
            backgroundColor: "#4E9940",
            paddingTop: "20px",
            paddingBottom: "3rem",
            borderBottomRightRadius: "3vmin",
            borderBottomLeftRadius: "3vmin",
            marginBottom: "2rem"
        },
        blue: {
            backgroundColor: "#0F265C",
            paddingTop: "20px",
            paddingBottom: "3rem",
            borderBottomRightRadius: "3vmin",
            borderBottomLeftRadius: "3vmin",
            marginBottom: "2rem"
        }
    }








    return ( 
        <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-10px", marginTop: "-30px"}} viewBox="0 0 1440 310"><path fill={css[variant].backgroundColor} fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,218.7C840,235,960,277,1080,266.7C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div style={css[variant]}>
            {children}
        </div>
        </>
     );
}
 
export default Background;