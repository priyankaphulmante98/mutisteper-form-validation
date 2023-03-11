// import React, { useContext } from 'react'
// import { Button, TextField } from '@material-ui/core'
// import { multistepContext } from '../StepContext'

// const ThirdStep = () => {
//     const { setStep, userData, setUserData, submitData } = useContext(multistepContext)

//     return (
//         <div>
//             <div>
//                 <TextField label="Address Line 1" style={{width:"500px"}}
//                     value={userData["address1"]} onChange={(e) => setUserData({ ...userData, "address1": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//                 <span> </span>
//                 <TextField label="Address Line 2" style={{width:"500px"}}
//                     value={userData["address2"]} onChange={(e) => setUserData({ ...userData, "address2": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//             </div>

//             <div>
//                 <TextField label="City" style={{width:"500px"}}
//                     value={userData["city"]} onChange={(e) => setUserData({ ...userData, "city": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//                 <span> </span>
//                 <TextField label="State" style={{width:"500px"}}
//                     value={userData["state"]} onChange={(e) => setUserData({ ...userData, "state": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//             </div>
//             {/* <div>
//                 <TextField label="Landmark"
//                     value={userData["landmark"]} onChange={(e) => setUserData({ ...userData, "landmark": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//             </div> */}
//             <div>
//             <TextField label="Country" style={{width:"500px"}}
//                     value={userData["country"]} onChange={(e) => setUserData({ ...userData, "country": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//                     <span> </span>
//                 <TextField label="Pin Code" style={{width:"500px"}}
//                     value={userData["postcode"]} onChange={(e) => setUserData({ ...userData, "postcode": e.target.value })}
//                     margin="normal" variant="outlined" color="secondary" />
//             </div>

//             <div>
//                 <Button variant="contained" color='secondary'
//                     onClick={() => setStep(2)}>BACK</Button>
//                 <span> </span>
//                 <Button variant="contained" color="primary"
//                     onClick={submitData}>SUBMIT</Button>
//             </div>

//         </div>
//     )
// }

// export default ThirdStep;