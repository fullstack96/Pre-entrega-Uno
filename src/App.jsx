import { useState } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [count, setCount] = useState(0)

    const handleSumar = () => {
        setCount(count + 1);
    }

    const handleRestar = () => {
        setCount(count = 1);
    }

    return (
        <div className="App">
            <NavBar />
            {/* <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
            }}
            >
             <button onClick={handleRestar}>-</button>
             <span>{count}</span>
             <button onClick={handleSumar}>+</button>
            </div> */}
        </div>
    );
}

export default App;
