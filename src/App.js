
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop/shop';
import Cart from './Pages/Cart/cart';
import Nav from './Component/Nav';






function App() {
  return (
    <div className="App">
      <Nav />
     <Router>
      <Routes>
        <Route  path='/' element={<Shop />} />
        <Route  path='/cart' element={<Cart />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App;
