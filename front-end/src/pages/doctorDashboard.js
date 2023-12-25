import React from 'react';
import '../stylesheets/sectionPosition.css';
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

export default function DoctorDashboard() {
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='section-position text-center overflow-auto'>
                    <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Doctor Dashboard</h1>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="card text-bg-dark m-3">
                                <img src="https://png.pngtree.com/background/20220727/original/pngtree-doctor-checking-a-patient-in-hospital-room-background-vector-illustration-picture-image_1835547.jpg" height={"250px"} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title fw-bold" style={{ color: "black" }}>Total Patients</h5>
                                    <p className="card-text fw-bold" style={{ color: "black" }}>Some random number</p>
                                    <p onClick={()=>{navigate("/accountDetails/arrangeAppoint")}} role='button' className='text-dark fw-bold'>Know more <FaLocationArrow/></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="card text-bg-dark m-3">
                                <img src="https://cdn.create.vista.com/api/media/medium/350387426/stock-photo-top-view-stethoscope-red-background?token=" height={"250px"} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title fw-bold" style={{ color: "black" }}>Total Doctors</h5>
                                    <p className="card-text fw-bold" style={{ color: "black" }}>Some random number</p>
                                    <a className="card-text fw-bold" href='/' style={{ color: "black" }}><small>Know more</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
