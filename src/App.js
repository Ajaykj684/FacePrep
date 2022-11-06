import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import {AuthProvider} from './context/AuthContext'



function App() {
  return (
    <>
      <Router>
        <AuthProvider> 
          <Routes>
                <Route exact path="/home" element={<Home />} /> 
                <Route path="/login" element={<Login />} /> 
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
