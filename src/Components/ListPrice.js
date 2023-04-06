import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import Typography from "@mui/material";

const ListPrice = () => {
    return(
        <Container>
            <TextField id="filled-basic" label="Filled" variant="filled">
                <Typography>Set your List Price</Typography>
            </TextField>
        </Container>
    )


}