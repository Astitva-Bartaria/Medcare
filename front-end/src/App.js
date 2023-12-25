import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Sidebar from './components/sidebar';
import WelcomeMe from './pages/WelcomeMe';
import UserProfile from './pages/userProfile';
import PatientDashboard from './pages/patientDashboard';
import MakeDiagnosis from './pages/makeDiagnosis';
import DiagnosisResult from './pages/diagnosisResult';
import Appointments from './pages/appointments';
import DoctorDashboard from './pages/doctorDashboard';
import AppointmentApproval from './pages/appointmentApproval';
import DrugRecommendation from './pages/drugRecommendation';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/accountDetails' element={<Sidebar/>}>
                <Route index element={<WelcomeMe/>}></Route>
                <Route path='myDetails' element={<UserProfile/>}></Route>
                <Route path='patientDashboard' element={<PatientDashboard/>}></Route>
                <Route path='diagnosis' element={<MakeDiagnosis/>}></Route>
                <Route path='diagnosisResults' element={<DiagnosisResult/>}></Route>
                <Route path='appointments' element={<Appointments/>}></Route>
                <Route path='doctorDashboard' element={<DoctorDashboard/>}></Route>
                <Route path='arrangeAppoint' element={<AppointmentApproval/>}></Route>
                <Route path='drugRecommendation' element={<DrugRecommendation/>}></Route>
            </Route>
        </Routes>
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <UserProfile /> */}
        {/* <PatientDashboard /> */}
        {/* <MakeDiagnosis /> */}
        {/* <DiagnosisResult /> */}
        {/* <Appointments /> */}
        {/* <DoctorDashboard /> */}
        {/* <AppointmentApproval /> */}
        {/* <DrugRecommendation /> */}
        <Toaster/>
        </>
    );
}

export default App;
