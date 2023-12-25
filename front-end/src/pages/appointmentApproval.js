import React, { useEffect, useState } from 'react';
import '../stylesheets/sectionPosition.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AppointmentApproval() {
    const [reqAppointments, setReqAppointments] = useState([]);
    const [delatilsBody,setDetailsBody] = useState({
        appointDate:"",
        appointTime:"",
        doctorContact:""
    })
    function monitorDetailsChange(event){
        setDetailsBody((prev)=>({
            ...prev,[event.target.id]:event.target.value
        }))
    }
    async function getReqAppoint() {
        const token = localStorage.getItem('myToken');
        try {
            const respReqAppoint = await axios.get('http://localhost:4000/medLife/v1/ada', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respReqAppoint.data) {
                setReqAppointments(respReqAppoint.data.bookedFor);
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
    async function appointDetails(appId){
        const token = localStorage.getItem('myToken');
        try {
            const respDetails = await axios.post(`http://localhost:4000/medLife/v1/daa/${appId}`,delatilsBody,{
                headers:{"Authorization": "Bearer " + token}
            });
            if(respDetails.data){
                toast.success(respDetails.data.message);
            }
            getReqAppoint();
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            }
            else {
                console.log(err);
            }
        }
    }
    useEffect(() => {
        getReqAppoint();
    }, []);
    if (reqAppointments.length === 0) {
        return (<div className='d-flex flex-row'>
            <div className='section-position overflow-auto'>
                <h2 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>There are no Appointments! Review our Algorithm</h2>
            </div>
        </div>)
    }
    else {
        return (
            <>
                <div className='d-flex flex-row'>
                    <div className='section-position overflow-auto'>
                        <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Arrange Appointments</h1>
                        <div className='container border shadow p-5 overflow-x-auto'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Patient</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Arrange Appointment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reqAppointments.map((singleReq, index) => {
                                            console.log(singleReq);
                                            return (
                                                <>
                                                    <tr key={singleReq._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{singleReq.appointBy.userName}</td>
                                                        <td>{singleReq.appointStatus}</td>
                                                        <td>{
                                                            singleReq.appointStatus !== "Approved" ? (<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#Aa${singleReq._id}`}>Approve</button>) : (<button type="button" className="btn btn-success" disabled>Approved</button>)
                                                        }</td>
                                                    </tr>
                                                    <div className="modal fade" id={`Aa${singleReq._id}`} tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header" style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>
                                                                    <h3 className='modal-title w-100 text-center'>Appointment Form</h3>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label htmlFor='appointDate' className="form-label">Date</label>
                                                                            <input type="date" className="form-control" aria-describedby="emailHelp" id='appointDate' value={delatilsBody.appointDate} onChange={monitorDetailsChange}/>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor='appointTime' className="form-label">Time</label>
                                                                            <input type="time" className="form-control" aria-describedby="emailHelp" id='appointTime' value={delatilsBody.appointTime} onChange={monitorDetailsChange}/>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor='doctorContact' className="form-label">Contact No.</label>
                                                                            <input type="number" className="form-control" aria-describedby="emailHelp" id='doctorContact' value={delatilsBody.doctorContact} onChange={monitorDetailsChange} />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{appointDetails(singleReq._id)}}>Appoint</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
