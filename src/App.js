import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componennts/Navbar';
import Home from './componennts/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}>
             </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
