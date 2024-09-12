import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/User/User';
import UserProfile from './components/User/UserProfile';
import Admin from './components/Admin/Admin';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/users" element={<User />} />
          <Route path="/userProfile/:userId" element={UserProfile} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


