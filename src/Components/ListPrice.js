import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { bank_limit } from "./SliderSelect";

const ListPrice = () => {

const [bank_limit, setBanklimit] = useState('100000')

const handleSubmit = (e) => {
    e.preventDefault();
    setBanklimit('')
}
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
            <TextField 
            id="filled-basic" 
            label="Filled" 
            variant="filled"
            value="bank_limit"
            onChange={(e) =>
                setBanklimit(e.target.value)
              } >
                <Typography>Set your List Price</Typography>
            </TextField>
            </Form>
        </Container>
    )

}
export default ListPrice