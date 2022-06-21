import {Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
      </Routes>
    );
}

export default AppRoutes;