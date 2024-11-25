import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MainScreenCus from './screens/Customer/main/mainScreen_Cus'; 
import SearchRouteScreen from './screens/Customer/search/searchScreen';
import ChooseSeat_1way from './screens/Customer/chooseSeatScreen/chooseSeatScreen1way';
import ChooseSeat_round from './screens/Customer/chooseSeatScreen/chooseSeatScreenround';
import FillInfor_1way from './screens/Customer/fillInfor/fillInforScreen1way';
import FillInfor_round from './screens/Customer/fillInfor/fillInforScreenround';
import LookUpTicket from './screens/Customer/LookUp/lookUpTicket';
import LookUpTicketstaf from './screens/TicketClerk/LookUpTicket';
import BookingHistory from './screens/Customer/HistoryBooking/HistoryBookingScreen';
import ViewSchedule from './screens/Driver/ViewScheduleScreen';
import ManageAccount from './screens/Admin/Account/manageAccScreen';
import ManageTicket from './screens/Admin/Ticket/manageTicketScreen';
import ManageBus from './screens/Admin/Bus/manageBusScreen';
import ManageBusRoute from './screens/Admin/BusRoute/manageBusRouteScreen';
import SignUpScreen from './screens/Auth/SignUp/SignUpScreen';
import SignInScreen from './screens/Auth/SignIn/SignInScreen';
import ForgotPass_Mail from './screens/Auth/ForgetPassword/ForgetPassword_enterEmail';
import ForgotPass_Pin from './screens/Auth/ForgetPassword/ForgetPass_Pin';
import ForgotPass_RePass from './screens/Auth/ForgetPassword/ForgotPass_RePass';
import Promtion from './screens/Admin/Promotion/managePromotiontScreen';
import Report from './screens/Admin/Report/ReportScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/mainCus" element={<MainScreenCus />} />
          <Route path="/searchScreen" element={<SearchRouteScreen />} />
          <Route path="/chooseseat1way" element={<ChooseSeat_1way/>}/>
          <Route path="/chooseseatround" element={<ChooseSeat_round/>}/>
          <Route path="/fillinfor1way" element={<FillInfor_1way/>}/>
          <Route path="/fillinforround" element={<FillInfor_round/>}/>
          <Route path="/lookupticket" element={<LookUpTicket/>}/>
          <Route path="/lookupticketstaff" element={<LookUpTicketstaf/>}/>
          <Route path="/bookinghistory" element={<BookingHistory/>}/>
          <Route path="/viewschedule" element={<ViewSchedule/>}/>
          <Route path="/manageacc" element={<ManageAccount/>}/>
          <Route path="/manageticket" element={<ManageTicket/>}/>
          <Route path="/managebus" element={<ManageBus/>}/>
          <Route path="/managebusroute" element={<ManageBusRoute/>}/>
          <Route path="/signup" element={<SignUpScreen/>}/>
          <Route path="/signin" element={<SignInScreen/>}/>
          <Route path="/fpmail" element={<ForgotPass_Mail/>}/>
          <Route path="/fppin" element={<ForgotPass_Pin/>}/>
          <Route path="/fprepass" element={<ForgotPass_RePass/>}/>
          <Route path="/managepromotion" element={<Promtion/>}/>
          <Route path="/report" element={<Report/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
