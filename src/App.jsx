
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './routes/navbar/Navbar';
import Home from './routes/home/Home';
import AboutUs from './routes/about/AboutUs';
import NotFound from './routes/notFound/PageNotFound';
import Footer from './routes/footer/Footer';
import ScrollTop from './components/scrollTop/ScrollTop';
import ScrollBar from './components/scrollBar/ScrollBar';
import WeforYou from './routes/weForYou/WeforYou';
import Projekte from './routes/projekte/Projekte';
import JobAngebote from './routes/jobangebote/JobAngebote';
import Contact from './routes/contact/Contact';
import Impressum from './routes/impressum/Impressum';
import Policy from './routes/policy/Policy';



function App() {


  return (
    <>
      <div className='appContainer'>
      <ScrollBar/>
        <Navbar/>
        
            <Outlet/>
            <ScrollTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/uber-uns' element={<AboutUs/>}/>
            <Route path='/wir-fur-sie' element={<WeforYou/>}/>
            <Route path='/projekte' element={<Projekte/>}/>
            <Route path='/job-angebote' element={<JobAngebote/>}/>
            <Route path='/kontakt' element={<Contact/>}/>
            <Route path='/impressum' element={<Impressum/>}/>
            <Route path='/datenschutzerklärung' element={<Policy/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App
