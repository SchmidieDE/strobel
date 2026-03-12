import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';


const Dropdown = (props) => {

    const [open, setOpen] = useState(false)

    const {title, text, variant} = props

    const css = {
        blue: {
          borderTop: "3px solid #0F265C"
        },
        green: {
          borderTop: "3px solid #4E9940"
        }
    }

    const handleOpen = () => {
      setOpen(!open)
    }


    return(
    <div style={{width: "90%", margin: "auto", marginBottom: "1rem", marginTop: "1rem"}} >
      <Accordion  style={{ zIndex: "0", borderRadius: "3vmin", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
        <AccordionSummary style={{}} onClick={() => handleOpen()}>
          <h3 style={{display: "inline-block", margin: "0px", padding: "0px", fontWeight: "600", width: "100%"}}>{title}</h3>
          <span style={{display: "flex", justifyContent: "flex-end"}}>
            {
            open ?   <KeyboardArrowUpIcon/> : <KeyboardArrowRightIcon style={{}}/>
            }
          </span>
        </AccordionSummary>
        <div style={{margin: "auto", width: "95%"}}>
          <hr style={{border:"none",  borderTop: css[variant].borderTop, marginTop: "0rem", marginBottom: "0rem"}}/>
        </div>
        <AccordionDetails style={{paddingTop: "0px"}}>
          <p style={{display: "block-inline", lineHeight: "1.4", fontSize: "1.1rem"}}>
            {text}
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}

export default Dropdown;
