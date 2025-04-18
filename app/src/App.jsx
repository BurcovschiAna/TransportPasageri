import './App.css'
import "./Media.css"

import { Route, Routes} from 'react-router-dom';
import { createContext } from 'react';
import HomePage from './Components/HomePage';
import Contacts from './Components/Contacts';
import Services from './Components/Services';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
export const TelephoneContext = createContext()
const telephone = "+37379636390"
function App() {
 
  return (
    <>
      <Nav telephone={telephone}/>
      <TelephoneContext.Provider value={telephone}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/Contacts' element={<Contacts/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>
      </TelephoneContext.Provider>
      <Footer telephone={telephone}/>
      
    </>
  )
}

export default App
