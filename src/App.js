import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import {AuthProvider} from './context/AuthContext'
import ProtectedRoute from './protectedRoute'



function App() {
  return (
    <>
      <Router>
        <AuthProvider> 
          <Routes>
                <Route  path="/home" element={<ProtectedRoute > <Home /> </ProtectedRoute>} /> 
                <Route path="/login" element={<Login />} /> 
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
