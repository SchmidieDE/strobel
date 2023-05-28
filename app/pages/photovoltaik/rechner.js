import Titel from "@/comp/design/title";
import Subtext from "@/comp/design/subtext";
import Background from "@/comp/design/background";
import Stichpunkte from "@/comp/design/stichpunkte";
import Subtitel from "@/comp/design/subtitle";
import TextInput from "@/comp/form/textinput";
import NumberInput from "@/comp/form/numberinput";
import { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import EuroIcon from '@mui/icons-material/Euro';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Rechner = () => {

    const [solution, setSolution] = useState()
    const Verschmutzungsgrad = ["10", "20", "25", "30"]


    const [form, setForm] = useState({
        nennleistung: 45,
        einspeis: 0.12,
        versch: 20,
        zeit: 7,
    })


    
    const convertStringToNumber = (str) =>  {
        // Replace "," with "." as decimal separator
        const cleanedStr = str.replace(",", ".");
        // Parse the string as a number
        const num = parseFloat(cleanedStr);
        return isNaN(num) ? 0 : num; // Return 0 if parsing fails
    }
    
    const handleForm = (name, value) => {
        setForm({...form, [name]: convertStringToNumber(value)})  
    }


    useEffect(() => {

        setSolution((form.nennleistung * form.einspeis * (form.versch/100)* form.zeit*1000).toFixed(2))

    }, [form])


    return ( <>
        <Titel variant={"bigcenter"} text={"Kostenrechner"}/>
        <Subtitel  text={"Lohnt sich eine Reinigung?"} variant={"left"} background={"whiteblue"}/>
        <Subtext variant={"white"} text={"Es gibt viele Gründe, weshalb Sie Ihre Anlage reinigen lassen sollten. Erhöhung der Lebensdauer der Module, Reduzierung von Störungen, welche oftmals durch Ablagerungen ausgelöst wird, sind einige davon, letztlich entscheidend ist allerdings der ökonomische Aspekt."}/>
        <Subtext variant={"white"} text={`Aus diesem Grund haben wir einen kleinen Rechner entwickelt mit dem Sie feststellen können, wie viel Geld Ihnen eine vermutzte Anlage über die Zeit kostet.`}/>
        <Subtitel  text={"Reinigungsrechner"} variant={"right"} background={"whiteblue"}/>
        <div style={{width: "80%", margin: "auto", marginBottom: "2rem"}}>
            <Grid container spacing={2}>
                        <Grid item xs={12} style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
                            <NumberInput Icon={<SolarPowerIcon sx={{color: "#0F265C"}}/>} label={"Nennleistung in kWp"} name={"nennleistung"} handleValue={handleForm} defaultValue={form.nennleistung} />
                        </Grid>
                        <Grid item xs={12} style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
                            <NumberInput Icon={<AccessTimeIcon sx={{color: "#0F265C"}}/>} label={"Jahre ohne Reinigung"} name={"zeit"} handleValue={handleForm} defaultValue={form.zeit} />
                        </Grid>
                        <Grid item xs={12} style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
                            <NumberInput Icon={<EuroIcon sx={{color: "#0F265C"}}/>} label={"Einspeisvergütung"} name={"einspeis"} handleValue={handleForm} defaultValue={form.einspeis} />
                        </Grid>
                        <Grid item xs={12} style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
                            <FormControl style={{width: "100%", borderRadius: "3vmin"}}
                                sx={{'& label.Mui-focused': {
                                    color: '#0F265C',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#0F265C',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                    borderColor: '#0F265C',
                                    },
                                    '&:hover fieldset': {
                                    borderColor: '#0F265C',
                                    },
                                    '&.Mui-focused fieldset': {
                                    borderColor: '#0F265C',
                                    },
                                },}}
                                >
                                <InputLabel id="demo-simple-select-autowidth-label">Verschmutzungsgrad</InputLabel>
                                <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-helper"
                                value={form.versch}
                                name="versch"
                                label="Verschmutzungsgrad"
                                placeholder={form.versch}
                                onChange={(e) => handleForm("versch", e.target.value)}
                                style={{width: "100%", fontSize: "1rem", fontWeight: "500", color:"black"}}
                                >
                                    {
                                        Verschmutzungsgrad.map((e, index) => {
                                            return (
                                                <MenuItem key={index} value={e}
                                                    sx={{'& label.Mui-focused': {
                                                        color: '#0F265C',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottomColor: '#0F265C',
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                        borderColor: '#0F265C',
                                                        },
                                                        '&:hover fieldset': {
                                                        borderColor: '#0F265C',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                        borderColor: '#0F265C',
                                                        },
                                                    },}}
                                                    style={{width: "100%", fontSize: "1rem", borderRadius: "3vmin", fontWeight: "500"}}                
                                                >{e+"%"}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <span style={{display: "inline-block", lineHeight: "1.1", marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "800"}}>Einspeisverluste durch Verschmutzung:</span>   
                                <span style={{textAlign: "center", display: "inline-block", backgroundColor: "#0F265C", color: "white", fontWeight: "800", fontSize: "1.7rem", padding: "0.4rem" }}>- {solution}€</span>
                                <span style={{display: "inline-block", lineHeight: "1.0", fontSize: "0.7rem", color: "gray", marginTop: "0.5rem"}}>Dies ist eine Beispielrechnung und die tatsächlichen Werte können aufgrund von unterschiedlichen Wirkungsgradverlusten, Besonnung und Verschmutzung von Anlage zu Anlage variieren.</span>
                            </div>
                        </Grid>
            </Grid>
        </div>
        <Subtitel  text={"Steuern"} variant={"left"} background={"whiteblue"}/>
        <Subtext variant={"white"} text={<>Zudem fließt der steuerliche Aspekt noch zusätzlich in die Rechnung mit rein. Privathaushalte können nämlich die Kosten der Reinigung einer Photovoltaikanlage von der Steuer absetzen, da eine solche Anlage als Gewerbe eingestuft wird und unsere Dienstleistung somit als betrieblicher Aufwand abzusetzen ist. Ebenso kann die Umsatzsteuer vom Finanzamt zurückerstattet werden.<br/><br/>Nicht zu Vergessen ist die Nutzung des selbsterzeugten Stroms, welcher ebenfalls in die Rentabilitätsberechnung einbezogen werden sollte.</>}/>
        <Stichpunkte arr={["Reinigung von der Steuer absetzbar","Umsatzsteuer ausweisbar", "Mehr Eigenstrom nutzen und Steuern sparen"]}  variant={"white"}/>
    </> );
}
 
export default Rechner;




