import React from 'react';
import '../stylesheets/home.css'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
    return (
        <>
            <Header />
            <div className='overflow-x-hidden'>
                {/* section1  */}
                <section id='home-section'>
                    <div className='section1'>
                        <div className='para1'>
                            <h1>Making Health Care Better Together</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud. </p>
                        </div>
                    </div>
                </section>
                {/* section2 */}
                <section id='about-section'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-12 col-sm-12'>
                            <img src='https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg' alt='images' />
                        </div>
                        <div className='para2 col-lg-7 col-md-12 col-sm-12 px-5'>
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud. </p>
                        </div>
                    </div>
                </section>
                {/* section3 */}
                <section id='doctor-section'>
                    <div className='row pb-5' style={{ paddingLeft: "10vw", backgroundColor: "rgb(178, 220, 255)" }}>
                        <h1 className='mt-5'>Meet Owr Doctors:</h1>
                        <div className='col mt-5'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://media.istockphoto.com/id/1334802862/video/4k-video-footage-of-a-young-male-doctor-at-work.jpg?s=640x640&k=20&c=fwnZK094YYaC33f2Lv4O5V3HQCfAXgPNBRhCN1eGZO4=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col mt-5'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://media.istockphoto.com/id/1388387529/photo/medical-hospital-medium-portrait-african-american-female-medical-doctor-takes-of-glasses.jpg?s=612x612&w=0&k=20&c=tdTeWI0ZHxX_7h5lMWYV_W0BTQxpG2ffSzpY2CGJaDs=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col mt-5'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://media.istockphoto.com/id/1135768971/video/portrait-of-confident-mature-doctor-at-hospital.jpg?s=640x640&k=20&c=qH4atGVfK4ldetGdZTfNYQP4KAqpN1rkYb2QKpP4g2I=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
