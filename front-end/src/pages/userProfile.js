import React, { useEffect, useState } from 'react';
import '../stylesheets/sectionPosition.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UserProfile() {
    const [userD, setUserD] = useState({
        userName:"",
        userEmail:"",
        userDob:"",
        userGender:"",
        userCountry:"",
        userRegion:""
    })
    function monitorUserDChange(event){
        setUserD((prev)=>({
            ...prev,[event.target.id]:event.target.value
        }))
    }
    async function getUserDetails(){
        const token = localStorage.getItem('myToken');
        try {
            const respUserDetails = await axios.get('http://localhost:4000/medLife/v1/ud',{
                headers:{"Authorization" : "Bearer " + token}
            });
            if(respUserDetails.data){
                setUserD({
                    userName:respUserDetails.data.userDetail.userName,
                    userEmail:respUserDetails.data.userDetail.userEmail,
                    userDob:respUserDetails.data.userDetail.userDob,
                    userGender:respUserDetails.data.userDetail.userGender,
                    userCountry:respUserDetails.data.userDetail.userCountry,
                    userRegion:respUserDetails.data.userDetail.userRegion
                })
            }
        } catch (err) {
            if(err.response){
                toast.error(err.response.data.message);
            }
            else{
                console.log(err);
            }
        }
    }
    async function editUserDetails(event){
        event.preventDefault();
        const token = localStorage.getItem('myToken');
        try {
            const respEdited = await axios.post('http://localhost:4000/medLife/v1/ed', userD, {
                headers: {"Authorization" : "Bearer " + token}
            });
            if(respEdited.data){
                toast.success(respEdited.data.message);
            }
            getUserDetails();
        } catch (err) {
            if(err.response){
                toast.error(err.response.data.message);
            }
            else{
                console.log(err);
            }
        }
    }
    useEffect(()=>{
        getUserDetails();
    },[]);
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='section-position overflow-auto'>
                    <div className='container border shadow p-5'>
                        <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>User Profile</h1>
                        <form className='container' onSubmit={editUserDetails}>
                            <div className="row mb-3">
                                <label htmlFor='userName' className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id='userName' value={userD.userName} onChange={monitorUserDChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor='userEmail' className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id='userEmail' value={userD.userEmail} onChange={monitorUserDChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor='userDob' className="col-sm-2 col-form-label">Date of Birth</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id='userDob' value={userD.userDob} onChange={monitorUserDChange}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor='userGender' className="col-sm-2 col-form-label">Gender</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" id='userGender' onChange={monitorUserDChange}>
                                        <option value="male" selected>Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="userCountry" className="col-sm-2 col-form-label">Country</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id='userCountry' value={userD.userCountry} onChange={monitorUserDChange}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="userRegion" className="col-sm-2 col-form-label">Region</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id='userRegion' value={userD.userRegion} onChange={monitorUserDChange}/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
