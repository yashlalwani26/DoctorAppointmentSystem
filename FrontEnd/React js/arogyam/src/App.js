import Layout from './Pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/contact';
import PatientPage from './Pages/HomePage/PatientPage';
import DoctorPage from './Pages/HomePage/DoctorPage';
import DoctorLoginLayout from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/DoctorLoginLayout';
import CreateAppointment from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/CreateAppointment';
import DoctorSeeAllTheSlotes from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/DoctorSeeAllSlotes';
import DoctorUpdateCreatedSlotes from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/DoctorUpdateCreatedSlotes';
import DoctorSeeAllSlotesDayWise from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/DoctorSeeAllSlotesDayWiseApointment';
import UpDateDoctorProfile from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/UpDateDoctorsProfile'; 
import PatientLogin from './Pages/HomePage/PatientFolder/PatientLogin';
import PatietAfterLoginLayout from './Pages/HomePage/PatientFolder/PatientLoginFolder/PatientAfterLoginLayout';
import UpdatePatient from './Pages/HomePage/PatientFolder/PatientLoginFolder/UpdatePatient';
import BookAppointmentByPinCode from './Pages/HomePage/PatientFolder/PatientLoginFolder/BookAppointmentByPinCode';
import DeleteSlot from './Pages/HomePage/PatientFolder/PatientLoginFolder/DeleteSlotes';
import DoctorReister from './Pages/HomePage/DoctorFolder/DoctorRegister';
import AdminPageLayout from './Pages/HomePage/AdminFolder/AdminPageLayout';
import AcceptNewDoctor from './Pages/HomePage/AdminFolder/AcceptNewDoctor';
import CreateAdmin from './Pages/HomePage/AdminFolder/CreateAdmin';
import DeleteDoctor from './Pages/HomePage/AdminFolder/DeleteDoctor';
import UpdateSlotes from './Pages/HomePage/PatientFolder/PatientLoginFolder/UpdateSlote';
// import DoctorLayout from './Pages/HomePage/DoctorFolder/DoctorLayout';
import AdminPage from './Pages/HomePage/AdminFolder/AdminPage';
import DoctorLogin from './Pages/HomePage/DoctorFolder/Login/DoctorLogin';
import DoctorRegister from './Pages/HomePage/DoctorFolder/DoctorRegister';
import RegisterPatient from './Pages/HomePage/PatientFolder/RegisterPatient';
import AddProfilePic from './Pages/HomePage/PatientFolder/AddProfilePic';
import HomePage from './Pages/HomeP';
import SeeDateWiseBookAppointment from './Pages/HomePage/DoctorFolder/DoctorLoginFolder/SeeDateWiseBookedAppointment';
import Review from './Pages/HomePage/PatientFolder/PatientLoginFolder/Review';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/PatientPage" element={<PatientPage />} />
          <Route path="/DoctorPage" element={<DoctorPage />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
          <Route path="/PatientLogin" element={<PatientLogin />} />
          <Route path="/PatietAfterLoginLayout" element={<PatietAfterLoginLayout />} />
          <Route path="/DeleteSlot" element={<DeleteSlot />} />
          <Route path="/DoctorRegister" element={<DoctorReister />} />
          <Route path="/UpdateSlotes" element={<UpdateSlotes />} />
         
          <Route path="/BookAppointmentByPinCode" element={<BookAppointmentByPinCode/>} />
          <Route path="/DoctorLoginLayout" element={<DoctorLoginLayout />} />
          <Route path="/CreateAppointment" element={<CreateAppointment />} />
          <Route path="/DoctorSeeAllTheSlotes" element={<DoctorSeeAllTheSlotes />} />
          <Route path="/DoctorUpdateCreatedSlotes" element={<DoctorUpdateCreatedSlotes />} />
          <Route path="/DoctorSeeAllSlotesDayWise" element={<DoctorSeeAllSlotesDayWise />} />
          <Route path="/UpDateDoctorProfile" element={<UpDateDoctorProfile />} />
          <Route path="/UpdatePatient" element={<UpdatePatient/>} />
          <Route path='/Review'  element={<Review/>}/>
          <Route path="/AdminPageLayout" element={<AdminPageLayout/>} />
          <Route path="/AcceptNewDoctor" element={<AcceptNewDoctor/>} />
          <Route path="/CreateAdmin" element={<CreateAdmin/>} />
          <Route path="/DeleteDoctor" element={<DeleteDoctor/>} />
          {/* <Route path="/DoctorLayout" element={<DoctorLayout/>} /> */}
          <Route path="/AdminPage" element={<AdminPage/>} />
          <Route path="/DoctorRegister" element={<DoctorRegister/>} />
          <Route path="/RegisterPatient" element={<RegisterPatient/>} />
          <Route path="/AddProfilePic" element={<AddProfilePic/>} />
          <Route path='/Home'  element={<HomePage/>}/>
          <Route path='/SeeDateWiseBookAppointment' element={<SeeDateWiseBookAppointment/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
