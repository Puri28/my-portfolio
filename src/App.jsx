import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Skillpage from './pages/Skillpage';
import Contactpage from './pages/Contactpage';

function App() {
    const [Page, setPage] = useState('home');

    return (
        <>
            <Navbar cPage={Page} setCurrentPage={setPage} />
            {Page === 'home' && <Homepage />}
            {Page === 'skills' && <Skillpage />}
            {Page === 'contact' && <Contactpage />}
        </>
    );
}

export default App;