import React, { useContext } from 'react'
// import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@material-ui/core'
import { multistepContext } from '../StepContext'
import Styles from '../Styles/DisplayData.module.css'

const DisplayData = () => {
    const { finalData } = useContext(multistepContext)

    return (
        <div div className={Styles.maindiv}>
            <h1 id={Styles.heading}>Data Added Successfully</h1>
            <div>
                {finalData.map((e) => {
                    return (
                        <div>
                            <p>Name : {e.firstname}{e.lastname}</p>
                            <p>FirstName : {e.firstname}</p>
                            <p>MiddleName : {e.middlename}</p>
                            <p>LastName : {e.lastname}</p>
                            <p>MobileNo : {e.contact}</p>
                            <p>Email : {e.email}</p>
                            <p>Birthday : {e.birthday}</p>
                            <p>Age : {e.age}</p>
                            <p>BloodGroup : {e.blood}</p>
                            <p>Height : {e.height}</p>
                            <p>Wight : {e.weight}</p>
                            <p>Gender : </p>
                            <p>MaritalStatus : </p>
                            <p>AddressLine1 : {e.address1}</p>
                            <p>AddressLine2 : {e.address2}</p>
                            <p>City : {e.city}</p>
                            <p>State : {e.city}</p>
                            <p>Country : {e.country}</p>
                            <p>Pincode : {e.postcode}</p>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default DisplayData


