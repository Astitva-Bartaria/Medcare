import React, { useEffect, useState } from 'react';
import '../stylesheets/sidebar.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
// icons 
import { TiHome } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaPills } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { FaNotesMedical } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

export default function Sidebar() {
    const navigate = useNavigate();
    const [isDoctor, setIsDoctor] = useState("");
    async function getIsDoctor() {
        const token = localStorage.getItem('myToken');
        try {
            const respIsDoc = await axios.get('http://localhost:4000/medLife/v1/ud', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respIsDoc.data) {
                setIsDoctor(respIsDoc.data.userDetail.accountType);
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    function logMeOut() {
        localStorage.clear();
        navigate("/");
    }
    useEffect(() => {
        getIsDoctor();
    }, []);
    return (
        <>
            <div className="d-flex">
                <div className="list-group sidebar border">
                    <Link to='/' className="menu-item" aria-current="true"><TiHome className='mt-1 me-2' /><p className="menu-item-label">Home</p></Link>
                    <Link to='myDetails' className="menu-item" aria-current="true"><FaCircleUser className='mt-1 me-2' /><p className="menu-item-label">My Profile</p></Link>
                    <Link to='patientDashboard' className={isDoctor === "doctor" ? ("d-none") : ("menu-item")} aria-current="true"><MdSpaceDashboard className='mt-1 me-2' /><p className="menu-item-label">Patient Dashboard</p></Link>
                    <Link to='diagnosis' className={isDoctor === "doctor" ? ("d-none") : ("menu-item")} aria-current="true"><PiNotepadFill className='mt-1 me-2' /><p className="menu-item-label">Make Diagnosis</p></Link>
                    <Link to='diagnosisResults' className={isDoctor === "doctor" ? ("d-none") : ("menu-item")} aria-current="true"><FaNotesMedical className='mt-1 me-2' /><p className="menu-item-label">Diagnosis Result</p></Link>
                    <Link to='appointments' className={isDoctor === "doctor" ? ("d-none") : ("menu-item")} aria-current="true"><FaCalendarCheck className='mt-1 me-2' /><p className="menu-item-label">Appointments</p></Link>
                    <Link to='doctorDashboard' className={isDoctor === "doctor" ? ("menu-item") : ("d-none")} aria-current="true"><MdSpaceDashboard className='mt-1 me-2' /><p className="menu-item-label">Doctor Dashboard</p></Link>
                    <Link to='drugRecommendation' className={isDoctor === "doctor" ? ("menu-item") : ("d-none")} aria-current="true"><FaPills className='mt-1 me-2' /><p className="menu-item-label">Drug Recommendation</p></Link>
                    <Link to='arrangeAppoint' className={isDoctor === "doctor" ? ("menu-item") : ("d-none")} aria-current="true"><FaCalendarCheck className='mt-1 me-2' /><p className="menu-item-label">Arrange Appointments</p></Link>
                    <button type="button" className="btn btn-danger mt-3 d-flex flex-row" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <TbLogout className='mt-1 me-2' />
                        <p className="menu-item-label">Logout</p>
                    </button>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure you want to Log out?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={logMeOut}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
