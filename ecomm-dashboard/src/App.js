import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header />*/}
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/add" element={<AddProduct />}/>
          <Route path="/update" element={<UpdateProduct />}/>
          <Route path="/list" element={<ProductList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
