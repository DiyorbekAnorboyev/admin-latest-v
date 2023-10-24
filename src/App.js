import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './components/adminpage/Adminpage';
import Markets from './components/markets/Markets';
import Product from './components/Product/Product';
import Login from './components/login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/adminpage' element={<Adminpage />} />
          <Route
              path="/adminpage/markets"
              element={<Adminpage activePage={<Markets />} />}
            /> 
          <Route
              path="/adminpage/products"
              element={<Adminpage activePage={<Product/>} />}
            /> 
            <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App