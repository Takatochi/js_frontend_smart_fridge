
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddInFridge from './components/AddInFridge';
import ChosenProduct from './components/ChosenProduct';
import FridgeList from './components/FridgeList';
import HeaderComponent from './components/HeaderComponent';
import Navigation from './components/Navigation';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route index element={<Navigation/>}/>
          <Route path='/' element={<Navigation/>}/>
          <Route path='/navigation' element={<Navigation/>}/>
          <Route path='/allProducts' element={<ProductsList/>}/>
          <Route path='/allFromFridge' element={<FridgeList/>}/>
          {/* <Route path='/allFromFridge/:id' element={<FridgeList/>}/> */}
          <Route path='/addInFridge' element={<AddInFridge/>}/>
          <Route path='/saveProduct/:id' element={<ChosenProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
