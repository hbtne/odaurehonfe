import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MainScreenCus from './screens/Customer/main/mainScreen_Cus'; // Import the component correctly
import SearchRouteScreen from './screens/Customer/booking/cusbookingScreen'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/mainCus" element={<MainScreenCus />} />
          <Route path="/searchScreen" element={<SearchRouteScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
