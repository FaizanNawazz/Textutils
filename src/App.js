import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({message: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
  const [mode, setmode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor='rgba(33,37,41,1)';
      showAlert("DarkMode is Enabled","success")
       document.title='TextUtils - DarkMode';
      // setInterval(() => {
      //   document.title='TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode is Enabled","success")
      document.title='TextUtils - LightMode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-2">
    <Routes>
          <Route exact path="about"element={<About mode={mode}/>}/>
          <Route exact path="home" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
