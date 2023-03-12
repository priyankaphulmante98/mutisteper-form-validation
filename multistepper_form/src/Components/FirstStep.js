import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext } from "react";
import { multistepContext } from "../StepContext";
import Styles from "../Styles/FirstStep.module.css";

const FirstStep = () => {


  const { setStep, userData, setUserData } = useContext(multistepContext);


function handleNext(){

  const {firstname, middlename, lastname, contact, email, birthday, age, maritial,gender,weight,height,blood} = userData;

  if(firstname && middlename&& lastname&& contact&& email&& birthday&& age&& maritial&&gender&&weight&&height&&blood){
    setStep(2)
  }
 


}
  return (
    <div className={Styles.maindiv}>
      <div className={Styles.inputDiv} >
        <TextField
          label="First name"
          className={Styles.label}
          value={userData["firstname"]}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          />
        <span> </span>

        <TextField
          label="Middle Name"
          className={Styles.label}
          value={userData["middlename"]}
          onChange={(e) =>
            setUserData({ ...userData, middlename: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          
        />
      </div>
      <div className={Styles.inputDiv}>
        <TextField
          label="Last name"
          className={Styles.label}
          value={userData["lastname"]}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          
        />

        <span> </span>

        <TextField
          label="Contact Number"
          className={Styles.label}
          value={userData["contact"]}
          onChange={(e) =>
            setUserData({ ...userData, contact: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          
        />
      </div>

      <div className={Styles.inputDiv}>
        <TextField
          label="Email"
          className={Styles.label}
          value={userData["email"]}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
          
        />
        <span> </span>

        <TextField
          className={Styles.label}
          type="date"
          value={userData["birthday"]}
          onChange={(e) =>
            setUserData({ ...userData, birthday: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          
        />
      </div>
      <div className={Styles.inputDiv}>
        <TextField
          label="Age"
          className={Styles.label}
          value={userData["age"]}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
          required
        />
        <span> </span>





   
      <FormControl>
        <InputLabel 
          variant="outlined"
          color="secondary"
        className={Styles.inputlabel} >Blood</InputLabel>
        <Select
          className={Styles.blood}
          onChange={(e) =>
            setUserData({ ...userData, blood: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          label="blood"
        >
          <MenuItem value="blood">
            Select Blood
          </MenuItem>
            <MenuItem value={"O+"}>O+</MenuItem>
            <MenuItem value={"A+"}>A+</MenuItem>
            <MenuItem value={"B+"}>B+</MenuItem>
            <MenuItem value={"AB+"}>AB+</MenuItem>
            <MenuItem value={"A-"}>A-</MenuItem>
            <MenuItem value={"B-"}>B-</MenuItem>
            <MenuItem value={"O-"}>O-</MenuItem>
            <MenuItem value={"AB-"}>AB-</MenuItem>
        </Select>
      </FormControl>

      </div>
      <span></span>

      <div className={Styles.inputDiv}>
        <TextField
          label="Height"
          className={Styles.label}
          value={userData["height"]}
          onChange={(e) => setUserData({ ...userData, height: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
          required
        />

        <span> </span>

        <TextField
          label="Weight"
          className={Styles.label}
          value={userData["weight"]}
          onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
          required
        />
      </div>
 <div className={Styles.inputDiv}>
      <FormControl
        className={Styles.label}
        value={userData["gender"]}
        onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
        margin="normal"
        variant="outlined"
        color="secondary"
        required
      >
        <FormLabel className={Styles.genderLabel} >Gender</FormLabel>
        <RadioGroup 
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <span></span>

      <FormControl  
        className={Styles.label}
        value={userData["maritial"]}
        onChange={(e) => setUserData({ ...userData, maritial: e.target.value })}
        margin="normal"
        variant="outlined"
        color="secondary"
        required
      >
        <FormLabel className={Styles.statusLabel}>
          Maritial Status
        </FormLabel>
        <RadioGroup className={Styles.radiobtn}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="single" control={<Radio />} label="Single" />
          <FormControlLabel
            value="married"
            control={<Radio />}
            label="Married"
          />
          <FormControlLabel
            value="divorced"
            control={<Radio />}
            label="Divorced"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>   

      </div>                                                                                                       
      

      <span></span>

      <section id={Styles.btn}>
        <Button id="btn1" variant="contained" color="secondary">
          BACK
        </Button>
        <span> </span>
        <Button  id="btn2" variant="contained" color="primary" onClick={() => 
        
          handleNext()}>
         
          NEXT
        </Button>
      </section>
    </div>
  );
};

export default FirstStep;
