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
        nennleistung: 40,
        einspeis: 0.47,
        versch: 30,
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
        <Subtext variant={"white"} text={"Es gibt viele Gründe, weshalb Sie Ihre Anlage reinigen lassen sollten. Erhöhung der Lebensdauer der Module, Reduzierung von Störungen, welcher oftmals durch Ablagerungen ausgelöst wird, sind einige davon, letztlich entscheidend ist allerdings der ökonomische Aspekt."}/>
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
                                <span style={{display: "inline-block", backgroundColor: "#0F265C", color: "white", fontWeight: "800", fontSize: "1.7rem", padding: "0.4rem" }}>- {solution}€*</span>
                                <span style={{display: "inline-block", lineHeight: "1.0", fontSize: "0.7rem", color: "gray", marginTop: "0.5rem"}}>Dies ist eine Beispielrechnung und die tatsächlichen Werte können aufgrund von unterschiedlichen Wirkungsgradverlusten, Besonnung und Verschmutzung von Anlage zu Anlage variieren.</span>
                            </div>
                        </Grid>
            </Grid>
        </div>
        <Subtitel  text={"Steuern"} variant={"left"} background={"whiteblue"}/>
        <Subtext variant={"white"} text={``}/>
        
        





        <Stichpunkte arr={["Vogelkot","Pollen und Blüten", "Laub und Baumnadeln", "Staub und Rückstände durch Viehaltung oder Verkehr", "Rückstände von Regen und Schnee"]}  variant={"white"}/>
        <Subtext variant={"white"} text={`Bei einem optimalen Neigungswinkel von 30 bis 35 Grad bleibt in der Regel weder Laub noch Schnee auf der PV-Anlage liegen. Allerdings können Umweltverschmutzung und Vogelkot dazu führen, dass die Anlage gereinigt werden muss. Insbesondere der Bereich zwischen Glas und Rahmen ist anfällig für Schmutzansammlungen und das Wachstum von Moos. Vernachlässigt man die regelmäßige Reinigung der Solaranlage, führt dies zu einer Verringerung des Wirkungsgrades, da weniger Sonnenlicht durch die Schmutzschicht gelangen kann. Zusätzlich beugt die Reiningung der Anlage Störungen der Anlage vor (Kurzschluss etc.)`}/>
        <Background variant={"blue"}>
            <Subtitel background={"blue"} text={"Ihre Vorteile"} variant={"left"}/>
            <Stichpunkte variant={"blue"} arr={["Steigerung Ihrer Erträge bis zu 30%", "Reinigungskosten sind auch für Privathaushalte von der Steuer absetzbar", "Hochwertige und sichere maschinelle Reinigung", "Kein Betreten der Modulflächen", "Spezialisiertes Reinigungsmittel für Module", "Erhöht die Nutzungsdauer der Anlage"]}/>
            <Subtitel background={"blue"} text={"Was macht uns aus?"} variant={"right"}/>
            <Subtext variant={"blue"} text={"Wir reinigen bereits seit 2012 professionell Photovoltaik- und Solaranlagen. Nach mehr als einem Jahrzehnt, haben wir nicht nur eine hohe Expertise rund um die Reinigung angehäuft, sondern auch es geschafft durch neuste Technik von spezialisierten Herstellern uns als Branchenvorreiter in der Region Oberschwaben herauszukristallisieren."}/>      
        </Background>
    </> );
}
 
export default Rechner;




