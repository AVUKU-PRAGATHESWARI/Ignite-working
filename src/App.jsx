import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Activites from './pages/Activities/Activities';
import LoginContainer from './containers/LoginContainer';
import RegistationContainer from './containers/RegistrationContainer';
import Contact from './pages/Contact/Contact';
import Teams from './pages/Teams/TeamsPage';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginContainer/>} />
        <Route path='/registration' element={<RegistationContainer/>} />
        <Route path='/activities' element={<Activites/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/teams' element={<Teams/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
