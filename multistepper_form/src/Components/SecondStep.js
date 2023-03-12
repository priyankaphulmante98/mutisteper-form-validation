import React, { useContext } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { multistepContext } from "../StepContext";
import Styles from "../Styles/SecondStep.module.css";

const SecondStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multistepContext);

    function handleNext(){

      const {address1, address2, state, country, city, postcode} = userData;
    
      console.log(address1, address2, state, country, city, postcode)
      if(address1 && address2 && state && country && city && postcode)
      {
        submitData()

      }
    
    }

  return (
    <div className={Styles.maindiv}>
      <div>
        <TextField
          label="Address Line 1"
         className={Styles.label}
          value={userData["address1"]}
          onChange={(e) =>
            setUserData({ ...userData, address1: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
        <span> </span>
        <TextField
          label="Address Line 2"
          className={Styles.label}
          value={userData["address2"]}
          onChange={(e) =>
            setUserData({ ...userData, address2: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <span> </span>
      <div>



      <FormControl>
         <InputLabel
          variant="outlined"
          color="secondary"
        className={Styles.inputlabel} >State</InputLabel>
        <Select
          className={Styles.blood}
          onChange={(e) =>
            setUserData({ ...userData, state: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          label="state"
        >
          <MenuItem value="state">
            Select Blood
          </MenuItem>
            <MenuItem value={"maharashtra"}>Maharashtra</MenuItem>
            <MenuItem value={"karnatak"}>karnatak</MenuItem>
            <MenuItem value={"andhrapradesh"}>Andhrapradesh</MenuItem>
            <MenuItem value={"jammu"}>Jammu</MenuItem>
            <MenuItem value={"telghana"}>Telghana</MenuItem>
            <MenuItem value={"meghalya"}>Meghalya</MenuItem>
            <MenuItem value={"gujrat"}>Gujrat</MenuItem>
            <MenuItem value={"rajsthan"}>Rajsthan</MenuItem>
          </Select>
        </FormControl>

        <span> </span>
        <FormControl>
          <InputLabel 
          variant="outlined"
          color="secondary"
        className={Styles.inputlabel} >Country</InputLabel>
        <Select
          className={Styles.blood}
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          label="blood"
        >
          <MenuItem value="">
            country
          </MenuItem>
          
            <MenuItem value={"India"}>INDIA</MenuItem>
            <MenuItem value={"Japan"}>JAPAN</MenuItem>
            <MenuItem value={"Jermany"}>JERMANY</MenuItem>
            <MenuItem value={"USA"}>USA</MenuItem>
            <MenuItem value={"UAE"}>UAE</MenuItem>
            <MenuItem value={"NA"}>NA</MenuItem>
            <MenuItem value={"SA"}>SA</MenuItem>
            <MenuItem value={"CHINA"}>CHINA</MenuItem>
          </Select>
        </FormControl>

        <span> </span>
       
      </div>

      

      <div>

<FormControl>
          <InputLabel 
          variant="outlined"
          color="secondary"
        className={Styles.inputlabel} >City</InputLabel>
        <Select
          className={Styles.blood}
          onChange={(e) =>
            setUserData({ ...userData, city: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          label="City"
        >
          <MenuItem value="">
           city
          </MenuItem>
          
            <MenuItem value={"pune"}>PUNE</MenuItem>
            <MenuItem value={"goa"}>GOA</MenuItem>
            <MenuItem value={"mumbai"}>MUMbai</MenuItem>
            <MenuItem value={"latur"}>LATUR</MenuItem>
        
          </Select>
        </FormControl>

        <span> </span>
       

        <TextField
          label="Pin Code"
          className={Styles.label}
          value={userData["postcode"]}
          onChange={(e) =>
            setUserData({ ...userData, postcode: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>

      <div id={Styles.btn}>
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => setStep(1)}
        >
          BACK
        </Button>
        <span> </span>
        <Button variant="contained" color="primary"onClick={() => 
        
        handleNext()}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
