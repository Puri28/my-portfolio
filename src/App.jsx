import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Skillpage from './pages/Skillpage';
import Contactpage from './pages/Contactpage';
import CaseStudyPage from './pages/CaseStudyPage';


function App() {
    const [Page, setPage] = useState('home');

    return (
        <>
            <Navbar cPage={Page} setCurrentPage={setPage} />
            {Page === 'home' && <Homepage setPage={setPage} />}
            {Page === 'skills' && <Skillpage />}
            {Page === 'contact' && <Contactpage />}
            {Page === 'casestudy' && <CaseStudyPage />}
        </>
    );
}

export default App;