import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function ThirdStep() {
    return (
        <div>
             <div>
            <TextField   label="District" margin='normal' variant='outlined' color='secondary' />
        </div>

        <div>
            <TextField   label="City" margin='normal' variant='outlined' color='secondary' />
       </div>

        <div>
            <TextField   label="Postal code" margin='normal' variant='outlined' color='secondary' />
        </div>

         <div>
            <Button variant='contained' color='primary'>Next</Button>
         </div>

        </div>
    )
}

export default ThirdStep
