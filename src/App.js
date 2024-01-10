import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Activites from './pages/Activities/Activities';
import LoginContainer from './containers/LoginContainer';
import RegistationContainer from './containers/RegistrationContainer';
import Contact from './pages/Contact/Contact';
import Teams from './pages/Teams/TeamsPage';
import Gallery from './pages/Gallery/Gallery';
<<<<<<< HEAD
import {Route as RouteName,RoutePrefix} from './Routes'
=======
import NavComponent from './components/NavBar/NavComponent';
>>>>>>> b7e63803b3f5bf5034e0938577845d0a89e90b16

function App() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={RoutePrefix} element={<Home/>} />
        <Route path={`${RoutePrefix}/${RouteName.Home}`} element={<Home/>} />
        <Route path={`${RoutePrefix}/${RouteName.Login}`} element={<LoginContainer/>} />
        <Route path={`${RoutePrefix}/${RouteName.Registration}`} element={<RegistationContainer/>} />
        <Route path={`${RoutePrefix}/${RouteName.Activities}`} element={<Activites/>}/>
        <Route path={`${RoutePrefix}/${RouteName.Contact}`} element={<Contact/>}/>
        <Route path={`${RoutePrefix}/${RouteName.Teams}`} element={<Teams/>} />
        <Route path={`${RoutePrefix}/${RouteName.Gallery}`} element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
