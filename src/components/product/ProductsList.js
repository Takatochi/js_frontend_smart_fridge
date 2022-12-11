import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import FridgeService from '../../services/FridgeService';
import Products from './Products';
import { useNavigate } from 'react-router-dom';


const ProductsList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                const response = await FridgeService.getAllProducts();
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData(false);
    }, []);

    
    const deleteProduct =(e, product)=>{
        e.preventDefault();
        console.log(">>>>> deleteProduct Product: "+product.id);
        console.log(">>>>> deleteProduct Fridge: "+product.id);     

        FridgeService.deleteProduct(product).then((res)=>{
            console.log(">>>>> deleteProduct is done");  
            if(products){
                console.log(">>> FridgeService.deleteProductFromFridge()"+ product.id);
                setProducts((prevElement)=>{
                    //return window.location.reload();
                    console.log(">>> prevElement "+ product.id);
                    return prevElement.filter((products)=> products.id !== product.id);
                });
            }
        }).catch((error)=>{
            console.log(error);
        });
    };

  return (
    
    <div className='flex'>
        All products
        <table className='min-w-full position: relative'>
            
            <thead className='bg-gray-50'>
            <tr className='shadow bottom-border'>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Name of products
                        </th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Measure
                        </th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Cost
                        </th>
                        <th>
                        <button onClick={()=>navigate("/addNewProduct")} className='rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-700 py-2 px-6'>
                            Add new product
                        </button>
                        </th>
                        <th>
                        <button onClick={()=>navigate("/navigation")} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Back</button>
                        </th>
                    </tr>
            </thead>
            {!loading &&(
                 <tbody>
                    {products.map((product)=>(
                        <Products product={product} deleteProduct = {deleteProduct} key={product.id}/>
                    ))}
                 </tbody>
            )}
        </table>
    </div>
  )
}

export default ProductsList