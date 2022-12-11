
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddInFridge from './components/fridge/AddInFridge';
import FridgeList from './components/fridge/FridgeList';
import HeaderComponent from './components/HeaderComponent';
import Navigation from './components/Navigation';
import ProductsList from './components/product/ProductsList';
import AddNewProduct from './components/product/AddNewProduct';
import UpdateProduct from './components/product/UpdateProduct';
import RecipeList from './components/recipe/RecipeList';
import AddRecipe from './components/recipe/AddRecipe';
import UpdateRecipe from './components/recipe/UpdateRecipe';
import ProductToRecipe from './components/product_to_recipe/ProductToRecipe';
import RecipeDetailsList from './components/product_to_recipe/RecipeDetailsList';
import UpdateProductToRecipe from './components/product_to_recipe/UpdateProductToRecipe';

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
          <Route path='/addNewProduct' element={<AddNewProduct/>}/>
          <Route path='/editProduct/:id' element={<UpdateProduct/>}/>
          <Route path='/allRecipe' element={<RecipeList/>}/>
          <Route path='/addNewRecipe' element={<AddRecipe/>}/>
          <Route path='/editRecipe/:id' element={<UpdateRecipe/>}/>
          <Route path='/recipes' element={<ProductToRecipe/>}/>
          <Route path='/recipeDetail/:id' element={<RecipeDetailsList/>}/>
          <Route path='/update_product/:id' element={<UpdateProductToRecipe/>}/>
          {/* <Route path='/allFromFridge/:id' element={<FridgeList/>}/> */}
          <Route path='/addInFridge' element={<AddInFridge/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
