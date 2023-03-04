import Link from "next/link"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const Whatsapp = () => {
    const [LinkState, setLinkState] = useState("")
    
    return(
        <>
        <Link href={`https://api.whatsapp.com/send?phone=${process.env.WHATSAPPNUMMER}&text=${LinkState}&source=&data=`}><a>
            <div style={{position: "fixed", bottom: "10px", right: "10px", zIndex: 1000, backgroundColor: "white", borderRadius: "1rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <Grid container spacing={2}>    
                <Grid item xs={4}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", padding: "10px"}}>
                    <WhatsAppIcon
                        color="success"
                        sx={{ 
                            fontSize: 60,
                        }}
                    />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <p style={{color: "black", verticalAlign: "middle"}}>Fragen?<br/>Jetzt chatten</p>
                </Grid> 
                
                </Grid>
            </div>
        </a></Link>
        </>
    )
}

export default Whatsapp