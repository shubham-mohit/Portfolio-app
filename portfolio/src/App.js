
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import Tech from './pages/Tech';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mobilebar from './components/Mobilebar';

function App() {
  return (
    <>
    <ToastContainer/>
    <Mobilebar/>
      <Layout/>
      <About/>
      <Education/>
      <Tech/>
      <Projects/>
      <Contact/>
      <ScrollToTop smooth style={{backgroundColor:'gray', color:'white' , BorderRadius:'100px'}} />
    </>
  );
}

export default App;
