
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { useContext } from 'react';
import './App.css';
import DisplayData from './Components/DisplayData';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import { multistepContext } from './StepContext';

function App() {
  const {currentStep,finalData} = useContext(multistepContext)
  function showStep(step){
    console.log(step)
    switch(step){
      case 1 : return  <FirstStep/>
      case 2 : return <SecondStep/>
      case 3 : return <DisplayData/>
    }
  }
  return (
    <div className="App">
       <h1 id="mainHeading">React js Multistep Application</h1>
     <div className='center-stepper'>
          <Stepper className="stepper" activeStep={currentStep-1} orientation="horizontal">
            <Step> 
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Address Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Thank You</StepLabel>
            </Step>
          </Stepper>
        </div>
       {showStep(currentStep)}
       <br/>
       {/* {finalData.length > 0 ? <DisplayData/> : ""} */}
      
    </div>
  );
}

export default App;
