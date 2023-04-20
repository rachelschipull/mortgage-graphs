import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Result from './Components/Result';
import SliderSelect from './Components/SliderSelect';
import TenureSelect from './Components/TenureSelect';
import ListPrice from './Components/ListPrice';

function App() {

  const [bankLimit, setBanklimit] = useState(100000)

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2, 
    loanAmount: 3000 * 0.8, 
    loanTerm: 5, 
    interestRate: 5,
  })

  return (
    <div className="App">
      <Navbar />
      <ListPrice bankLimit={bankLimit} setBanklimit={setBanklimit}/>
        <Container maxWidth="xl" sx={{marginTop:4}}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} bankLimit={bankLimit}/>
              <TenureSelect data={data} setData={setData}/>
            </Grid>
            <Grid item xs={12} md={6}>
             <Result data={data}/>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
