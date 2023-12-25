import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [userRegisterData, setUserRegisterData] = useState({
        userName:"",
        accountType:"patient",
        userEmail:"",
        userPassword:""
    });

    function monitorUserRegister(event){
        setUserRegisterData((prev)=>({
            ...prev,[event.target.id]:event.target.value
        }))
    }

    async function registerUser(event){
        event.preventDefault();
        console.log(userRegisterData);
        try {
            const respRegister = await axios.post('http://localhost:4000/medLife/v1/ur',userRegisterData);
            if(respRegister.data){
                toast.success(respRegister.data.message);
            }
            navigate('/login');
        } catch (err) {
            if(err.response){
                toast.error(err.response.data.message);
            }
            else{
                console.log(err);
            }
        }
    }
    return (
        <>
            <Header />
            <div className='container border shadow p-5 my-5'>
                <form onSubmit={registerUser}>
                    <div>
                        <h1 className='py-3 mb-5 text-center' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Registration Form</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Username</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" id='userName' value={userRegisterData.userName} onChange={monitorUserRegister} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="accountType" className="form-label">Account Type</label>
                        <select className="form-select" aria-label="Default select example" id='accountType' onChange={monitorUserRegister}>
                            <option selected value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" id='userEmail' value={userRegisterData.userEmail} onChange={monitorUserRegister}  required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id='userPassword' value={userRegisterData.userPassword} onChange={monitorUserRegister} required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 my-3">Register</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
