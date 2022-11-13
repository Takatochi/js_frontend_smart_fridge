import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import FridgeService from '../services/FridgeService';

const Fridge = ({fridge, deleteProduct}) => {


    const [product, setProduct]= useState({

        fridge_id: fridge.fridge_id,
        product_id: fridge.product_id,
        quantity: fridge.quantity 

    });


    const handleChange = (e) => {
        const value = e.target.value;
        console.log(">>>>> update  VALUE: "+value);
        console.log(">>>>> update  name: "+e.target.name);
        console.log(">>>>> productid: "+product.product_id);
        
    
        setProduct({...product, [e.target.name]: value}); 

        console.log(">>>>> update  Quantity: "+product.quantity);

    }
    

    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                //const response = await FridgeService.updateProductInFridge(product);
                //setProduct(product);
                //console.log(">>>>> useEffect Product: "+product.product_id);
                //console.log(">>>>> useEffect Quantity: "+product.quantity);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateProduct = (e) =>{
        e.preventDefault();
        FridgeService.updateProductInFridge(product)
        .then((response) =>{
            window.location.reload();
        }).catch((error)=>{
            console.log(error);
        });
    }
    //deleteProduct(e, fridge.fridge_id, fridge.product_id)

    const deleteP = (e)=>{
         //e.preventDefault();
         console.log("product >>"+product.product_id);
         deleteProduct(e, product);
    //     FridgeService.deleteProductFromFridge(product).
    //     then((response)=>{
    //        if(product){
    //         setProduct((prevElement)=>{
    //             return prevElement.filter((product)=> fridge.fridge_id !==)
    //         })
    //        }
    //     }).catch((error)=>{
    //         console.log(error);
    //     });
    }
    

    return(
        <tr key={fridge.product_id} >
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                {fridge.product_name}
                                
                            </div>
                        </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                     <div className='text-sm text-gray-500'>
                     {fridge.quantity}
                        <input
                        type="text"
                        name='quantity'
                        defaultValue = {fridge.quantity}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'>
                            
                            </input>
                            
                    </div>
                </td>     
                <td>
                    <button onClick={updateProduct} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2'>
                        Update Product
                    </button>
                    </td>      
                    <td>
                    <button onClick={deleteP} className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-2'>
                        Delete Product
                    </button>
                </td>   
        </tr>
    )
}

export default Fridge