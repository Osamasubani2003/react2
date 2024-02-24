import './carCss.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Products from './Products';
import Payment from './Payment';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/Products" element={<Products />} />
            </Routes>
            <Routes>
                <Route path="/Payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;