import React, { useEffect, useState } from 'react';
import '../stylesheets/sectionPosition.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Appointments() {
    const [myAppointments, setMyAppointments] = useState([]);
    async function getAllAppoint() {
        const token = localStorage.getItem('myToken');
        try {
            const respAllAppoint = await axios.get('http://localhost:4000/medLife/v1/uaa', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respAllAppoint.data) {
                setMyAppointments(respAllAppoint.data.bookedFor);
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
    useEffect(() => {
        getAllAppoint();
    }, []);
    if (myAppointments.length === 0) {
        return (<div className='d-flex flex-row'>
            <div className='section-position overflow-auto'>
                <h2 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>There are no Appointments! Book One Now</h2>
            </div>
        </div>)
    }
    else {
        return (
            <>
                <div className='d-flex flex-row'>
                    <div className='section-position overflow-auto'>
                        <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Appointments</h1>
                        <div className='container border shadow p-5 overflow-x-auto'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Patient</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Doctor</th>
                                        <th scope="col">Doctor Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myAppointments.map((single, index) => {
                                            return (
                                                <tr key={single._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{single.appointBy.userName}</td>
                                                    <td>{single.appointStatus}</td>
                                                    <td>{single.appointDate}</td>
                                                    <td>{single.appointTime}</td>
                                                    <td>{single.appointDoctor}</td>
                                                    <td>{single.doctorContact}</td>
                                                </tr>
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
