import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LogInPg from "../pages/LogIn/LogInPg";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LogInPg />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/login" />} />
                {/* Add other routes here */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
