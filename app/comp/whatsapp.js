import Link from "next/link"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Whatsapp = () => {

    return(
        <Link href="https://api.whatsapp.com/send?phone=491708083239&text=&source=&data=">
            <div className="whatsapp-btn" style={{
                position: "fixed",
                bottom: "16px",
                right: "16px",
                zIndex: 999,
                backgroundColor: "white",
                borderRadius: "50px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                padding: "10px 16px 10px 12px",
                gap: "8px",
            }}>
                <WhatsAppIcon sx={{ fontSize: 32, color: "#25D366" }} />
                <span style={{color: "#333", fontWeight: "600", fontSize: "0.9rem", whiteSpace: "nowrap"}}>Jetzt chatten</span>
            </div>
        </Link>
    )
}

export default Whatsapp
