import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header />*/}
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/add"> 
            <Protected  Cmp={AddProduct}/> {/*element={<AddProduct />}*/}
          </Route> 
          <Route path="/update"> 
            <Protected Cmp={UpdateProduct}/> {/*element={<UpdateProduct />}*/}
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
