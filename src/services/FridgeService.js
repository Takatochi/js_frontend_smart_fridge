import axios from "axios";

const PRODUCTS_API_BASE_URL = "http://localhost:8080/fridge/v1/all/products";
const FRIDGE_API_BASE_UPL = "http://localhost:8080/fridge/v1/all/products/1";
const PRODUCTS_NOT_IN_FRIDGE_API_BASE_URL = "http://localhost:8080/fridge/v1/not_in_fridge";
const PRODUCT_BY_ID_API_BASE_URL = "http://localhost:8080/fridge/v1/product/";
const SAVE_PRODUCT_IN_FRIDGE_API_BASE_URL = "http://localhost:8080/fridge/v1/all/products";
const UPDATE_PRODUCT_API_BASE_URL = "http://localhost:8080/fridge/v1/product_quantity_update";
const DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL ="http://localhost:8080/fridge/v1/delete_product_from_fridge";

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
        return axios.put(UPDATE_PRODUCT_API_BASE_URL, product);
    }

    deleteProductFromFridge(product){
        //return axios.delete(DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL, config, product);
        //setValue(config, )
        config.data = product;
        return axios.delete(DELETE_PRODUCT_FROM_FRIDGE_API_BASE_URL, config);
    }


}

export default new FridgeService();