import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddEmployee = () => {
    const [data, setData] = useState({
        employeeId: "",
        firsttname: "",
        lastname: "",
        dob: "",
        
        mob: "",
        email: "",
        address: ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status ==  "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
    return (
        <div>
            <Navbar />
            
            <h1><center>Employee Application</center></h1>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="fname" className="form-label">EMPLOYEE ID</label>
                                <input type="text" className="form-control" name='employeeId' value={data.employeeId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="lname" className="form-label">FIRST NAME</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="college" className="form-label">LAST NAME</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="dob" className="form-label">DOB</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">MOBILE</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="email" className="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="address" className="form-label">ADDRESS</label>
                                <textarea className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
