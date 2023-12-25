import React from 'react';
import '../stylesheets/sectionPosition.css';
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

export default function PatientDashboard() {
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='section-position text-center overflow-auto'>
                    <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Patient Dashboard</h1>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="card text-bg-dark m-3">
                                <img src="https://i.pngimg.me/thumb/f/720/5564652173918208.jpg" height={"250px"} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title fw-bold" style={{ color: "black" }}>Total Drug Recommendations</h5>
                                    <p className="card-text fw-bold" style={{ color: "black" }}>Some random number</p>
                                    <p onClick={()=>{navigate("/accountDetails/diagnosisResults")}} role='button' className='text-primary fw-bold'>Know more <FaLocationArrow/></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="card text-bg-dark m-3">
                                <img src="https://img.freepik.com/premium-photo/desktop-calendar-february-2022-yellow-background_557865-861.jpg?size=626&ext=jpg" height={"250px"} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title fw-bold" style={{ color: "black" }}>Appointments made</h5>
                                    <p className="card-text fw-bold" style={{ color: "black" }}>Some random number</p>
                                    <p onClick={()=>{navigate("/accountDetails/appointments")}} role='button' className='text-primary fw-bold'>Know more <FaLocationArrow/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
