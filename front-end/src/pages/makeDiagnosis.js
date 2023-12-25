import React, { useState } from 'react';
import '../stylesheets/sectionPosition.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function MakeDiagnosis() {
    const [mySuffering, setSuffering] = useState("Disease Prediction will be shown here");
    const [loading, setLoading] = useState(false);
    const [symp, setSymp] = useState({
        symp1: "itching",
        symp2: "chills",
        symp3: "muscle_wasting",
        symp4:"headache",
        symp5:"mild_fever"
    })
    function monitorSympchange(event) {
        setSymp((prev) => ({
            ...prev, [event.target.id]: event.target.value
        }))
    }
    async function getDisease(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const respDisease = await axios.post('http://127.0.0.1:5000/compute', symp);
            if (respDisease.data) {
                setSuffering(respDisease.data.result);
                addDiagnosisResults(respDisease.data.result);
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
                setSuffering("No Data Right Now for your Disease!");
            }
            else {
                console.log(err);
            }
        }
        setLoading(false);
    }
    async function addDiagnosisResults(dis){
        const token = localStorage.getItem('myToken');
        try {
            await axios.get(`http://localhost:4000/medLife/v1/dr/${dis}`,{
                headers:{"Authorization": "Bearer " + token}
            })
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
                setSuffering("No Data Right Now for your Disease!");
            }
            else {
                console.log(err);
            }
        }
    }
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='section-position overflow-auto'>
                    <div className='container border shadow p-5'>
                        <h1 className='text-center p-3 mb-5 border' style={{ backgroundColor: "rgb(178, 220, 255)", borderRadius: "10px" }}>Disease Prediction Panel</h1>
                        <form className='container' onSubmit={getDisease}>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">1st Symptom</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" id='symp1' onChange={monitorSympchange}>
                                        <option value="itching" selected>Itching</option>
                                        <option value="skin_rash">Skin Rash</option>
                                        <option value="nodal_skin_eruptions">Nodal Skin Eruption</option>
                                        <option value="continuous_sneezing">Continuous Sneezing</option>
                                        <option value="weight_gain">Weight Gain</option>
                                        <option value="anxiety">Anxiety</option>
                                        <option value="cold_hands_and_feets">Cold Hands and Feets</option>
                                        <option value="mood_swings">Mood Swings</option>
                                        <option value="weight_loss">Weight Loss</option>
                                        <option value="restlessness">Restlessness</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">2nd Symptom</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" id='symp2' onChange={monitorSympchange}>
                                        <option value="chills" selected>Chills</option>
                                        <option value="joint_pain">Joint Pain</option>
                                        <option value="stomach_pain">Stomach Pain</option>
                                        <option value="acidity">Acidity</option>
                                        <option value="ulcers_on_tongue">Ulcers on Tounge</option>
                                        <option value="lethargy">Lethargy</option>
                                        <option value="patches_in_throat">Patches in Throat</option>
                                        <option value="irregular_sugar_level">Irregular Sugar Level</option>
                                        <option value="cough">Cough</option>
                                        <option value="high_fever">High Fever</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">3rd Symptom</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" id='symp3' onChange={monitorSympchange}>
                                        <option value="muscle_wasting" selected>Muscle Wasting</option>
                                        <option value="vomiting">Vomiting</option>
                                        <option value="burning_micturition">Burning Sensation</option>
                                        <option value="spotting_ urination">Irregular Urination</option>
                                        <option value="fatigue">Fatigue</option>
                                        <option value="sunken_eyes">Suken Eyes</option>
                                        <option value="breathlessness">Breathlessness</option>
                                        <option value="sweating">Sweating</option>
                                        <option value="dehydration">Dehydartion</option>
                                        <option value="indigestion">Indigestion</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">4th Symptom</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" id='symp4' onChange={monitorSympchange}>
                                        <option value="headache" selected>Headache</option>
                                        <option value="yellowish_skin">Yellowish Skin</option>
                                        <option value="dark_urine">Dark Urine</option>
                                        <option value="nausea">Nausea</option>
                                        <option value="loss_of_appetite">Loss of Appetite</option>
                                        <option value="pain_behind_the_eyes">Pain behind the Eyes</option>
                                        <option value="back_pain">Back Pain</option>
                                        <option value="constipation">Constipation</option>
                                        <option value="abdominal_pain">Abdominal Pain</option>
                                        <option value="diarrhoea">Diarrhoea</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">5th Symptom</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" id='symp5' onChange={monitorSympchange}>
                                        <option value="mild_fever" selected>Mild Fever</option>
                                        <option value="yellow_urine">Yellow Urine</option>
                                        <option value="yellowing_of_eyes">Yellowing of Eyes</option>
                                        <option value="swelling_of_stomach">Swelling of Stomach</option>
                                        <option value="malaise">Malaise</option>
                                        <option value="chest_pain">Chest Pain</option>
                                        <option value="runny_nose">Runny Nose</option>
                                        <option value="bloody_stool">Bloody Stool</option>
                                        <option value="weakness_in_limbs">Weakness in Limbs</option>
                                        <option value="loss_of_smell">Loss of Smell</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Predict</button>
                            <div className="alert alert-warning mt-4" role="alert">
                                {
                                    loading === true ? (<div className="spinner-border text-danger" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>) : (<p>You may have <span className='text-danger fw-bold'>{mySuffering}</span>. Book Appointment to Know More!</p>)
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
