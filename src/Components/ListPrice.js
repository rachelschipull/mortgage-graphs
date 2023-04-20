import React from "react";
import { TextField } from "@mui/material";
import { Container, Form } from "@mui/system";
import Typography from "@mui/material/Typography";


function ListPrice({bankLimit, setBanklimit}) {



const handleSubmit = (e) => {
    e.preventDefault();
}
    return(
        <Container>
            <form onSubmit={handleSubmit}>
            <Typography>Set your List Price</Typography>
            <TextField 
                id="filled-basic" 
                label="Filled" 
                variant="filled"
                value={bankLimit}
                type="number"
                onChange={(e) =>
                    setBanklimit(e.target.value)
                } >
            </TextField>
            </form>
        </Container>
    )

}
export default ListPrice