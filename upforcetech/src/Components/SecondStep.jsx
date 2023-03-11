import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function SecondStep() {
    return (
        <div>
             <div>
            <TextField   label="Email" margin='normal' variant='outlined' color='secondary' />
        </div>

        <div>
            <TextField   label="Age" margin='normal' variant='outlined' color='secondary' />
       </div>

        <div>
            <TextField   label="Country" margin='normal' variant='outlined' color='secondary' />
        </div>

         <div>
            <Button variant='contained' color='primary'>Next</Button>
         </div>

        </div>
    )
}

export default SecondStep
