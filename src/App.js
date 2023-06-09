import { Routes, Route } from 'react-router-dom';
import Missions from './pages/Missions';
import Profile from './components/Profile';
import Rockets from './pages/Rockets';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
