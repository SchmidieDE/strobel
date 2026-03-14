const Background = ({children, variant}) => {

    const css={
        green: {
            backgroundColor: "#4E9940",
            background: "linear-gradient(170deg, #5aaa4a 0%, #3d7a32 60%, #2d5e25 100%)",
            paddingTop: "1.5rem",
            paddingBottom: "3.5rem",
            borderRadius: "0 0 24px 24px",
            marginBottom: "2.5rem"
        },
        blue: {
            backgroundColor: "#0F265C",
            background: "linear-gradient(170deg, #152f6b 0%, #0F265C 60%, #091a42 100%)",
            paddingTop: "1.5rem",
            paddingBottom: "3.5rem",
            borderRadius: "0 0 24px 24px",
            marginBottom: "2.5rem"
        }
    }

    const gradientStops = {
        green: [
            { offset: "0%", color: "#5aaa4a" },
            { offset: "60%", color: "#3d7a32" },
            { offset: "100%", color: "#2d5e25" },
        ],
        blue: [
            { offset: "0%", color: "#152f6b" },
            { offset: "60%", color: "#0F265C" },
            { offset: "100%", color: "#091a42" },
        ],
    }

    const gradientId = `wave-gradient-${variant}`
    const stops = gradientStops[variant]

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: "-10px", marginTop: "-30px"}} viewBox="0 0 1440 310">
            <defs>
                <linearGradient id={gradientId} x1="59%" y1="1%" x2="41%" y2="99%">
                    {stops.map((s, i) => (
                        <stop key={i} offset={s.offset} stopColor={s.color} />
                    ))}
                </linearGradient>
            </defs>
            <path fill={`url(#${gradientId})`} fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,218.7C840,235,960,277,1080,266.7C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div style={css[variant]}>
            {children}
        </div>
        </>
     );
}

export default Background;
