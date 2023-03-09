import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';






const Dropdown = (props) => {
    
    const [open, setOpen] = useState(false)

    const {title, text} = props

    const handleOpen = () => {
      setOpen(!open)
    }


    return(
    <div style={{width: "90%", margin: "auto", marginBottom: "1rem"}} onClick={() => handleOpen()}>
      <Accordion style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
        <AccordionSummary style={{}}> 
          <h3 style={{margin: "0px", padding: "0px", fontWeight: "600"}}>{title}</h3>
          <span >
            {
            open ?   <KeyboardArrowUpIcon/> : <KeyboardArrowRightIcon/> 
            }
          </span>
        </AccordionSummary>
        <AccordionDetails style={{}}>
          <p style={{display: "block-inline"}}>
            {text}
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}
 
export default Dropdown;




