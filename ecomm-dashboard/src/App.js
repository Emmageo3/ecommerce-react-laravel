import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Ecommerce</h1>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/add" element={<AddProduct />}/>
          <Route path="/update" element={<UpdateProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
