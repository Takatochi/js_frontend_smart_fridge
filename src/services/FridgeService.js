import axios from "axios";

const PRODUCTS_API_BASE_URL = "http://localhost:8080/fridge/v1/all/pr_type";//
const ADD_PRODUCT_API_BASE_URL = "http://localhost:8080/fridge/v1/add/product";
const FRIDGE_API_BASE_UPL = "http://localhost:8080/fridge/v1/all/products/1";
const PRODUCTS_NOT_IN_FRIDGE_API_BASE_URL = "http://localhost:8080/fridge/v1/not_in_fridge";
const PRODUCT_BY_ID_API_BASE_URL = "http://localhost:8080/fridge/v1/product/";
const SAVE_PRODUCT_IN_FRIDGE_API_BASE_URL = "http://localhost:8080/fridge/v1/all/products";
const UPDATE_PRODUCT_QUANTITY_API_BASE_URL = "http://localhost:8080/fridge/v1/product_quantity_update";
const UPDATE_PRODUCT_API_BASE_URL = "http://localhost:8080/fridge/v1/product_update";
const DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL ="http://localhost:8080/fridge/v1/delete_product_from_fridge";
const DELETE_PRODUCT_API_BASE_URL = "http://localhost:8080/fridge/v1/delete_product";
const GET_PRODUCT_BY_ID_API_BASE_URL = "http://localhost:8080/fridge/v1/product_by_id";

//recipe
const ALL_RECIPE_API_BASE_URL = "http://localhost:8080/fridge/v1/all/recipes";
const ADD_RECIPE_API_BASE_URL = "http://localhost:8080/fridge/v1/add/recipe";
const DELETE_RECIPE_API_BASE_URL = "http://localhost:8080/fridge/v1/delete_recipe";
const UPDATE_RECIPE_API_BASE_URL = "http://localhost:8080/fridge/v1/recipe_update";
const GET_RECIPE_BY_ID_API_BASE_URL = "http://localhost:8080/fridge/v1/recipe_by_id";

//product to recipe
const GET_RECIPE_DETAILS_BY_ID_API_BASE_URL = "http://localhost:8080/fridge/v1/products_to_recipe";
const UPDATE_PRODUCT_TO_RECIPE_API_BASE_URL = "http://localhost:8080/fridge/v1/product_in_recipe_update";

const config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {}

  };
  
class FridgeService{

    

    getAllProducts(){
        return axios.get(PRODUCTS_API_BASE_URL);
    }

    addNewProductInList(product){
        return axios.post(ADD_PRODUCT_API_BASE_URL, product);
    }

    getProductByIdInList(id){
        return axios.get(GET_PRODUCT_BY_ID_API_BASE_URL + "/"+ id);
    }


    getAllFromFridge(){
        return axios.get(FRIDGE_API_BASE_UPL);
    }

    getProductsNotInFridge(){
        return axios.get(PRODUCTS_NOT_IN_FRIDGE_API_BASE_URL);
    }

    getProductById(id){
        return axios.get(PRODUCT_BY_ID_API_BASE_URL + "/" + id);
    }

    saveProductInFridge(product){
        return axios.post(SAVE_PRODUCT_IN_FRIDGE_API_BASE_URL, product);
    }


    updateProductInFridge(product){
        return axios.put(UPDATE_PRODUCT_QUANTITY_API_BASE_URL, product);
    }

    updateProduct(product, id){
        return axios.put(UPDATE_PRODUCT_API_BASE_URL + "/" + id, product);
    }

    deleteProductFromFridge(product){
        //return axios.delete(DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL, config, product);
        //setValue(config, )
        config.data = product;
        return axios.delete(DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL, config);
    }

    deleteProduct(product){

        config.data = product;
        return axios.delete(DELETE_PRODUCT_API_BASE_URL, config);
    }

    //recipe

    getAllRecipes(){
        return axios.get(ALL_RECIPE_API_BASE_URL);
    }

    addNewRecipe(recipe){
        return axios.post(ADD_RECIPE_API_BASE_URL, recipe);
    }

    deleteRecipe(recipe){
        //return axios.delete(DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL, config, product);
        //setValue(config, )
        config.data = recipe;
        return axios.delete(DELETE_RECIPE_API_BASE_URL, config);
    }

    updateRecipe(recipe, id){
        return axios.put(UPDATE_RECIPE_API_BASE_URL + "/" + id, recipe);
    }

    getRecipeById(id){
        return axios.get(GET_RECIPE_BY_ID_API_BASE_URL + "/"+ id);
    }


    // product to recipe

    getAllRecipesForChoose(){
        return axios.get(ALL_RECIPE_API_BASE_URL);
    }

    recipeDetails(id){
        return axios.get(GET_RECIPE_DETAILS_BY_ID_API_BASE_URL + "/"+ id);
    }

    updateProductToRecipe(recipe, id){
        return axios.put(UPDATE_RECIPE_API_BASE_URL + "/" + id, recipe);
    }


}

export default new FridgeService();