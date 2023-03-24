import { Box, TextField } from "@mui/material";




const TextInput = () => {
    return ( <>   
        <Box
        component="form"
        noValidate
        autoComplete="off"
        >
         <div style={{width: "85%", margin: "auto", marginTop: "1.3rem", marginBottom: "1rem"}}>
            <TextField
            id="outlined-textarea"
            label="Bitte Text eingeben"
            placeholder="Text"
            multiline
            value={text}
            onChange={event => setText(event.target.value)}
            sx={{'& label.Mui-focused': {
                color: '#1c1c1c',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#1c1c1c',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#fa6e00',
                },
                '&:hover fieldset': {
                  borderColor: '#fa6e00',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1c1c1c',
                },
              },}}
            inputProps={{style: {fontSize: 20}}}
            style={{width: "100%", fontSize: "1.2rem", borderRadius: "3vmin", fontWeight: "bold"}}
             />
         </div>
        </Box>
    </> );
}
 
export default TextInput;

