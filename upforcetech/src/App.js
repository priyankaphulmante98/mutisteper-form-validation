import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { Stepper, StepLabel, Step, } from '@mui/material';

function App() {

  function showStep(step){

    switch(step){
      case 1 :
        return <FirstStep />
      case 2 :
        return <SecondStep />
      case 3 :
        return <ThirdStep />
    }

  }
  return (
    <header className="App">
      <h2 style={{color:"red", textDecoration:"underline"}}>ReactJs Multi Step Application</h2>
      <div className="center-stepper">
      <Stepper style={{width: "18%"}} activeStep="1" orientation="horizontal">

        <Step>
          <StepLabel> </StepLabel>
        </Step>

        <Step>
          <StepLabel> </StepLabel>
        </Step>

        <Step>
          <StepLabel> </StepLabel>
        </Step>

      </Stepper>


      </div>

     {
      showStep(2)
     }
    {/* <FirstStep/>
    <SecondStep />
    <ThirdStep /> */}
    </header>
  );
}

export default App;
