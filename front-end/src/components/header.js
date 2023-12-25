import React, { useEffect } from 'react';
import logo from '../images/logo.png';
import { FaUserTie } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation();
    const token = localStorage.getItem('myToken');
    let path = location.pathname.split('/')[1];
    function getLocation(){
        path = location.pathname.split('/')[1];
    }
    useEffect(()=>{
        getLocation();
    },[path])
    return (
        <div className='container'>
            <div className='row pt-4 pb-5'>
                <div className='col d-flex flex-row'>
                    <img src={logo} alt='logo' height={"50px"} />
                    <h4 className='p-2 fw-bold'>MEDCARE</h4>
                </div>
                <div className='col'>
                    <ul className="nav justify-content-end">
                        <li className="nav-item p-2">
                            <Link to='/' className='text-decoration-none'>HOME</Link>
                        </li>
                        <li className={path === "register" || path === "login" ? "d-none" : "nav-item"}>
                            <a className="nav-link" href="#about-section">ABOUT</a>
                        </li>
                        <li className={path === "register" || path === "login" ? "d-none" : "nav-item"}>
                            <a className="nav-link" href="#doctor-section">DOCTORS</a>
                        </li>
                        {
                            token ? (<Link to='/accountDetails'><FaUserTie className='text-primary fs-4 mt-2' role='button'/></Link>) : (<><li className="nav-item p-2">
                            <Link to='/register' className='text-decoration-none'>REGISTER</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to='/login' className='text-decoration-none'>LOGIN</Link>
                        </li></>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
