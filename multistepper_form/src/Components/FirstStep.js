import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
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

  return (
    <div className={Styles.maindiv}>
      <div>
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
      <div>
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

      <div>
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
          label="Birthday"
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
      <div>
        <TextField
          label="Age"
          className={Styles.label}
          value={userData["age"]}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
        />
        <span> </span>

        <TextField
          label="Blood Group"
          className={Styles.label}
          value={userData["blood"]}
          onChange={(e) => setUserData({ ...userData, blood: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
        >
          {/* <ption>O+</ption>
               <option>O-</option>
               <option>A+</option>
               <option>A-</option>
               <option>B+</option>
               <option>B-</option>
               <option>AB+</option>
               <option>AB-</option> */}
        </TextField>
      </div>

      <div>
        <TextField
          label="Height"
          className={Styles.label}
          value={userData["height"]}
          onChange={(e) => setUserData({ ...userData, height: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
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
        />
      </div>

      <span></span>

      <FormControl
        className={Styles.label}
        value={userData["gender"]}
        onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
        margin="normal"
        variant="outlined"
        color="secondary"
      >
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
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
      >
        <FormLabel id="demo-row-radio-buttons-group-label">
          Maritial Status
        </FormLabel>
        <RadioGroup
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

      <span></span>
  
      <div>
        <Button variant="contained" color="secondary">
          BACK
        </Button>
        <span> </span>
        <Button variant="contained" color="primary" onClick={() => setStep(2)}>
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
