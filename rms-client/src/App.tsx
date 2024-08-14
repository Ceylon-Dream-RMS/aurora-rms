
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import Event from './modules/events/Event';
import Employees from './modules/employees/Employees';
import Reservation from './modules/reservations/reservation';
import Restuarent from './modules/restuarent/restuarent';
import Spa from './modules/spa/spa';
import Guests from './modules/guests/guests';
import Transport from './modules/transportation/transportation';
import Offers from './modules/offers/offers';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hr' element={<Employees/>}/>
        <Route path='/event' element={<Event/>}/>
        {/* <Route path='/event/1' element={<Events/>}/> */}
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/restuarent' element={<Restuarent/>}/>
        <Route path='/spa' element={<Spa/>}/>
        <Route path='/profile' element={<Guests/>}/>
        <Route path='/transportation' element={<Transport/>}/>
        <Route path='/offers' element={<Offers/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
