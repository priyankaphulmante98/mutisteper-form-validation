import React, { useContext } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { multistepContext } from "../StepContext";
import Styles from "../Styles/SecondStep.module.css";

const SecondStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multistepContext);

  return (
    <div className={Styles.maindiv}>
      <div>
        <TextField
          label="Address Line 1"
          style={{ width: "500px" }}
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
          style={{ width: "500px" }}
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
          <Select
            label="State"
            style={{ width: "500px" }}
            value={userData["state"]}
            onChange={(e) => setUserData({ ...userData, state: e.target.value })}
            margin="normal"
            variant="outlined"
            color="secondary"
          >
            <MenuItem value={""}>Select Contry</MenuItem>
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
          <Select
            label="Country"
            style={{ width: "500px" }}
            value={userData["country"]}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
            margin="normal"
            variant="outlined"
            color="secondary"
          >
            <MenuItem value={""}>Select Contry</MenuItem>
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
      <TextField
          label="City"
          style={{ width: "500px" }}
          value={userData["city"]}
          onChange={(e) =>
            setUserData({ ...userData, city: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />

      
        <span> </span>
       

        <TextField
          label="Pin Code"
          style={{ width: "500px" }}
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
        <Button variant="contained" color="primary" onClick={submitData}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
