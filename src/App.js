import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authentication, Dashboard } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Authentication.LoginPage />} />
          <Route path="/register" element={<Authentication.RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
