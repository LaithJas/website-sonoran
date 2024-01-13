import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import Services from "@/scenes/services";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app bg-gray-20">
                <Route path="/navbar" component={Navbar} />
                <Route path="/home" component={Home} />
                <Route path="/services" component={Services} />
            </div>
        </Router>


    );
}

export default App;
