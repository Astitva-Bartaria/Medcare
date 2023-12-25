import React, { useEffect, useState } from 'react';
import '../stylesheets/sectionPosition.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function DiagnosisResult() {
    const [diagnosedResults, setDiagnosedResults] = useState([]);
    async function getDiagnosisResultss() {
        const token = localStorage.getItem('myToken');
        try {
            const respDiaResults = await axios.get('http://localhost:4000/medLife/v1/gd', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respDiaResults.data) {
                setDiagnosedResults(respDiaResults.data.userDiagnosed);
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
    async function bookMyAppoint(appId) {
        const token = localStorage.getItem('myToken');
        try {
            const respBooked = await axios.get(`http://localhost:4000/medLife/v1/ba/${appId}`, {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respBooked.data) {
                toast.success(respBooked.data.message);
            }
            getDiagnosisResultss();
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
        getDiagnosisResultss();
    }, []);
    if (diagnosedResults.length === 0) {
        return (<div className='d-flex flex-row'>
            <div className='section-position overflow-auto'>
                <h2 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>There are no diagnosed Results! Diagnose Yourself</h2>
            </div>
        </div>)
    }
    else {
        return (
            <>
                <div className='d-flex flex-row'>
                    <div className='section-position overflow-auto'>
                        <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Diagnosis Results</h1>
                        <div className='container border shadow p-5 overflow-x-auto'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Disease</th>
                                        <th scope="col">Medicine</th>
                                        <th scope="col">Appointment</th>
                                    </tr>
                                </thead>
                                {
                                    diagnosedResults.map((singleDiagnos, index) => {
                                        return (
                                            <tbody key={singleDiagnos._id}>
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{singleDiagnos.userId.userName}</td>
                                                    <td>{singleDiagnos.diseases}</td>
                                                    <td>
                                                        {
                                                            singleDiagnos.medicines.length === 0 ? (singleDiagnos.medicines.length) : (<>
                                                                <div className="btn-group">
                                                                    <button className="btn btn-ligth dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Meds
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        {
                                                                            singleDiagnos.medicines.map((medS) => {
                                                                                return (
                                                                                    <li className='ms-3'>{medS}</li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </>)
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            singleDiagnos.wantAppoint === true ? (<button className='btn btn-secondary' disabled>Requested</button>) : (<button className='btn btn-success' onClick={() => { bookMyAppoint(singleDiagnos._id) }}>Request</button>)
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div >
                    </div >
                </div >
            </>
        )
    }
}
