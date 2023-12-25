import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate =  useNavigate();
    const [userLoginData,setUserLoginData] = useState({
        userEmail:"",
        userPassword:""
    })
    
    function monitorLoginChange(event){
        setUserLoginData((prev)=>({
            ...prev,[event.target.id]:event.target.value
        }))
    }

    async function loginUser(event){
        event.preventDefault();
        try {
            const respLogin = await axios.post('http://localhost:4000/medLife/v1/ul',userLoginData);
            if(respLogin.data){
                localStorage.setItem('myToken',respLogin.data.yourToken);
                toast.success(respLogin.data.message);
            }
            navigate("/");
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
                <form onSubmit={loginUser}>
                    <div>
                        <h1 className='py-3 mb-5 text-center' style={{backgroundColor:"rgb(178, 220, 255)", borderRadius:"10px"}}>Login</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" id='userEmail' value={userLoginData.userEmail} onChange={monitorLoginChange} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id='userPassword' value={userLoginData.userPassword} onChange={monitorLoginChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 my-3">Login</button>
                </form>
            </div>
            <Footer />
        </>
    )
}