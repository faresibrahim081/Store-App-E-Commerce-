import Main from './components/main/Main';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilterProducts from './components/filterProducts/FilterProducts';
import SingleProduct from './components/filterProducts/SingleProduct';
import Login from './components/login/Login';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={ <Main /> } />
        <Route path='/filterProducts/:type'  element={ <FilterProducts /> } />
        <Route path='/filterProducts/:type/:id'  element={ <SingleProduct /> } />
        <Route path='/login'  element={ <Login /> } />
      </Routes>
      </BrowserRouter>
      <ScrollToTop />
    </div>
  );
}

export default App;
