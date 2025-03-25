import './App.css'
import { Link, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Contacts from './Components/Contacts';
import Services from './Components/Services';
import Nav from './Components/Nav'
import Footer from './Components/Footer'

const telephone = "1234567890"
function App() {

  return (
    <>
      <Nav telephone={telephone}/>
      <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/Contacts' element={<Contacts telephone={telephone} />} />
                <Route path='/Services' element={<Services />} />
            </Routes>
      <Footer telephone={telephone}/>
      
    </>
  )
}

export default App
