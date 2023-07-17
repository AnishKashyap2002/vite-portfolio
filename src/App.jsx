import Home from "./components/Home";
import "./App.css";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import Navbar from "./individualComponents/Navbar";
import Footer from "./individualComponents/Footer";
import ShowProject from "./components/ShowProject";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route
                        path="/experience"
                        element={<Experience />}
                    />
                    <Route
                        path="/project/:id"
                        element={<ShowProject />}
                    ></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
