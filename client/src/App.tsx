
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Navbar from './constants/Navbar';

import './App.css'

import Home from './pages/Home';
import AddInfo from './pages/AddInfo';
import RemoveInfo from './pages/RemoveInfo';
import EditInfo from './pages/EditInfo';


const App: React.FC = () => {
  // Define the items that will be displayed in the navbar
  const navbarItems = [
    { label: 'Home', link: '/' },
    { label: 'Add Info', link: '/add-info' },
    { label: 'Remove Info', link: '/remove-info' },
    { label: 'Edit Info', link: '/edit-info' },
  ];

  return (
    <Router>
      <Navbar items={navbarItems}></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-info" element={<AddInfo/>} />
        <Route path="/remove-info" element={<RemoveInfo />} />
        <Route path="/edit-info" element={<EditInfo/>} />
      </Routes>
    </Router>
  )
};

export default App;