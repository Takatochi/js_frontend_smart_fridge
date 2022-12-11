import React, { useState } from 'react'
import FridgeService from '../../services/FridgeService';
import { useNavigate } from 'react-router-dom';


const NotInFridgeProducts = ({fridge}) => {


    const [product, setProduct]= useState({

        fridge_id: fridge.fridge_id,
        product_id: fridge.product_id,
        quantity: "" 

    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;

        setProduct({...product, [e.target.name]: value}); 
    }

    const saveProduct =(e)=>{
        e.preventDefault();
        FridgeService.saveProductInFridge(product).then((response)=>{
            console.log(response);
            navigate("/allFromFridge")
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className='float-left'>
           
        <div key={fridge.product_id}>
            
            <div >{fridge.fridge_id}</div>
            <div className='w-25 text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500' >
                                <a>
                                    {fridge.product_name}
                                </a>
                                
                            </div>
                        </div>  
                        <div className='w-25 p-3'>
                            <div >
                                Quantity
                                <input type="text"
                                name='quantity'
                                value={product.quantity}
                                onChange={(e) => handleChange(e)}
                                className='h-10 w-96 border mt-2 px-2 py-2'>
                                    
                                </input>
                            </div>
                        </div>
                        <div className='w-25'>
                            <div className='text-sm text-gray-500 hover:cursor-pointer'>
                            <button onClick={saveProduct} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2'>
                                Add
                            </button>
                            </div>
                        </div>  
                        
                               
        </div>
        
        </div> 
        
    )
}

export default NotInFridgeProducts