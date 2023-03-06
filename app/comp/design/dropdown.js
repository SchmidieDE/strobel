import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const DropDown = () => {
    



    return(
    <div >
      <Accordion>
        <AccordionSummary>
          <Typography >Headline</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Text content goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}
 
export default DropDown;




