import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Activites from './pages/Activites';
import News from './pages/News';
import LoginContainer from './containers/LoginContainer';
import RegistationContainer from './containers/RegistrationContainer';
import Contact from './pages/Contact';
import Teams from './pages/Teams/TeamsPage';

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
        <Route path='/news' element={<News/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
