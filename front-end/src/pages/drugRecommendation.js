import React, { useEffect, useState } from 'react';
import '../stylesheets/sectionPosition.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function DrugRecommendation() {
    const [allPatients, setAllPatients] = useState([]);
    const [dRecommd,setDRecommend] = useState({
        fDrug:"",
        sDrug:"",
        tDrug:""
    })
    function monitorChangeRecommend(event){
        setDRecommend((prev)=>({
            ...prev,[event.target.id]:event.target.value
        }))
    }
    async function getAllPatient() {
        const token = localStorage.getItem('myToken');
        try {
            const respALlPatient = await axios.get('http://localhost:4000/medLife/v1/aa', {
                headers: { "Authorization": "Bearer " + token }
            });
            if (respALlPatient.data) {
                setAllPatients(respALlPatient.data.allUsers);
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
    
    async function recommendDrugs(appId){
        const token = localStorage.getItem('myToken');
        try {
            const respDrugRecommend = await axios.post(`http://localhost:4000/medLife/v1/dra/${appId}`,dRecommd,{
                headers:{"Authorization" : "Bearer " + token}
            });
            if(respDrugRecommend.data){
                toast.success(respDrugRecommend.data.message);
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
        getAllPatient();
    }, []);
    if (allPatients.length === 0) {
        return (<div className='d-flex flex-row'>
            <div className='section-position overflow-auto'>
                <h2 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>There are No Patient with Disease!</h2>
            </div>
        </div>)
    }
    else {
        return (
            <>
                <div className='d-flex flex-row'>
                    <div className='section-position text-center overflow-auto'>
                        <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Drug Recommendation Panel</h1>
                        <div className='container border shadow p-5 overflow-x-auto'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Disease</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allPatients.map((singlePatient, index) => {
                                            return (
                                                <>
                                                    <tr key={singlePatient._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{singlePatient.userId.userName}</td>
                                                        <td>{singlePatient.diseases}</td>
                                                        <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#aaa${singlePatient._id}`}>
                                                            Recommend
                                                        </button></td>
                                                    </tr>
                                                    <div className="modal fade" id={`aaa${singlePatient._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header" style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>
                                                                    <h3 className='modal-title w-100 text-center'>Recommend Medicines</h3>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label htmlFor='fDrug' className="form-label">First Drug Name:</label>
                                                                            <input type="text" className="form-control" aria-describedby="emailHelp" id='fDrug' value={dRecommd.fDrug} onChange={monitorChangeRecommend}/>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor='sDrug' className="form-label">Second Drug Name:</label>
                                                                            <input type="text" className="form-control" aria-describedby="emailHelp" id='sDrug' value={dRecommd.sDrug} onChange={monitorChangeRecommend} />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor='tDrug' className="form-label">Third Drug Name:</label>
                                                                            <input type="text" className="form-control" aria-describedby="emailHelp" id='tDrug' value={dRecommd.tDrug} onChange={monitorChangeRecommend} />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{recommendDrugs(singlePatient._id)}}>Recommend</button>
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
