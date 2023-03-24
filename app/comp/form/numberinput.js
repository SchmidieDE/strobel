import { Box, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

import { LocationCity } from "@mui/icons-material";

const NumberInput = ({label, handleValue, defaultValue, name, Icon}) => {
    return ( <>
    <Box
      component="form"
      sx={{
        //'& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
            defaultValue={defaultValue}
            id="outlined-number"
            label={label}
            onChange={(e) => handleValue(name, e.target.value)}
            name={name}
            type="number"
            
            InputLabelProps={{
                shrink: true,
            }}
           

            InputProps={{
                endAdornment: (
                  <InputAdornment position="end" >
                    {Icon}
                  </InputAdornment>
                )
            }}
            
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
            inputProps={{style: {fontSize: 20}}}
            style={{width: "100%", fontSize: "1.2rem", borderRadius: "3vmin", fontWeight: "bold"}}
        />
    </Box>
    </> );
}
 
export default NumberInput;