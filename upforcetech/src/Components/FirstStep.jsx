import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function FirstStep() {
    return (
     <div>

        <div>
            <TextField   label="First Name" margin='normal' variant='outlined' color='secondary' />
        </div>

        <div>
            <TextField   label="Last Name" margin='normal' variant='outlined' color='secondary' />
       </div>

        <div>
            <TextField   label="Contact Number" margin='normal' variant='outlined' color='secondary' />
        </div>

         <div>
            <Button variant='contained' color='primary'>Next</Button>
         </div>

    </div>
    )
}

export default FirstStep
