import React from "react";
import { SiWorldhealthorganization } from "react-icons/si";
import '../stylesheets/sectionPosition.css'

export default function WelcomeMe() {
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='section-position overflow-auto'>
                    <div className="card m-5">
                        <div className="card-header">
                            <SiWorldhealthorganization /> Welcome to Medcare
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Thanks for choosing Medcare!</h5>
                            <p className="card-text">Navigate Through Options to view Features!</p>
                        </div>
                    </div>
                </div>
                </div>
            </>
            )
}