import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import FridgeService from '../../services/FridgeService';
import { useNavigate } from 'react-router-dom';

const RecipeDetails = ({prRecipe})=>{

    const navigate = useNavigate();
    const [product, setProduct] = useState({
        
        recipes_id : prRecipe.recipes_id,
        product_id: prRecipe.product_id,
        name: prRecipe.product_name,
        quantity: prRecipe.quantity

});



const updateProduct = (e, id)=>{
    e.preventDefault();
    navigate(`/update_product/${id}`);
};


const handleChange = (e) => {
    const value = e.target.value;
    
    //setPrRecipes({...prRecipes, [e.target.name]: value}); 

};



return(
    <div key={product.product_id} >
        
        <div className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                            <h1 className='font-thin text-2xl tracking-wider'>{product.name}</h1>
                            
                        </div>
                    </div>

                    <div className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                            <h1 className='font-thin text-2xl tracking-wider'>{product.quantity}</h1>
                            
                        </div>
                    </div>
            <td>
                <button  onClick={(e, id) => updateProduct(e, prRecipe.product_id)} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2'>
                    Update Product
                </button>
                </td>      
                {/* <td>
                <button onClick={deleteP} className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-2'>
                    Delete Product
                </button>
            </td>    */}
    </div>
)

}

export default RecipeDetails;