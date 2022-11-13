import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import FridgeService from '../services/FridgeService';
import NotInFridgeProducts from './NotInFridgeProducts';

function AddInFridge(){

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [fridge, setFridge] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                const response = await FridgeService.getProductsNotInFridge();
                setFridge(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData(false);
    }, []);

    const [value, setValue] = useState('');

    const filteredProducts = fridge.filter(product =>{
        return product.product_name.toLowerCase().includes(value.toLowerCase());
    })

  return (
    
    <div className='flex'>
        
        <div className='min-w-full position: relative'>
            
            <div className='bg-gray-50'>
            <div className='shadow bottom-border'>
                        <div className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Name of products
                        </div>
                        
                        
                        <div>
                        <button onClick={()=>navigate("/allFromFridge")} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Back</button>
                        </div>
                    </div>
                    <div>
                        <div>
                <input className='shadow' type="text" placeholder='Search' onChange={(event) => setValue(event.target.value)}/>
                </div>
                    </div>
                    
            </div>
            
            {!loading &&(
                 <div>
                    
                    {filteredProducts.map((fridge)=>(
                        <NotInFridgeProducts fridge={fridge} key={fridge.product_id}/>
                    ))}
                    
                 </div>
            )}
            
        </div>
    </div>
  )
}


export default AddInFridge