import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MainScreenCus from './screens/Customer/main/mainScreen_Cus'; // Import the component correctly
import SearchRouteScreen from './screens/Customer/search/searchScreen';
import ChooseSeat_1way from './screens/Customer/chooseSeatScreen/chooseSeatScreen1way';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/mainCus" element={<MainScreenCus />} />
          <Route path="/searchScreen" element={<SearchRouteScreen />} />
          <Route path="/chooseseat1way" element={<ChooseSeat_1way/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
