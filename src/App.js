import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
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
