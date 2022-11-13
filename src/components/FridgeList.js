import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import FridgeService from '../services/FridgeService';
import Fridge from './Fridge';
// import { useParams } from 'react-router-dom';

const FridgeList =()=> {

    // const params =useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [fridge, setFridge] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                console.log(">>> FridgeService.getAllFromFridge()");
                const response = await FridgeService.getAllFromFridge();
                setFridge(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData(false);
    }, []);

   
    const deleteProduct =(e, product)=>{
        e.preventDefault();
        console.log(">>>>> deleteProduct Product: "+product.product_id);
        console.log(">>>>> deleteProduct Fridge: "+product.fridge_id);     

        FridgeService.deleteProductFromFridge(product).then((res)=>{
            console.log(">>>>> deleteProduct is done");  
            if(fridge){
                console.log(">>> FridgeService.deleteProductFromFridge()"+ product.product_id);
                setFridge((prevElement)=>{
                    //return window.location.reload();
                    console.log(">>> prevElement "+ product.product_id);
                    return prevElement.filter((fridge)=> fridge.product_id !== product.product_id);
                });
            }
        }).catch((error)=>{
            console.log(error);
        });
    };

  return (
    
    <div className='flex'>
        
       Fridge table
        <table className='min-w-full position: relative'>
            
            <thead className='bg-gray-50'>
            <tr className='shadow bottom-border'>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Name of products
                        </th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Quantity
                        </th>
                        <th>
                        <button onClick={()=>navigate("/addInFridge")} className='rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-700 py-2 px-6'>
                            Add
                        </button>
                        </th>
                        <th>
                        <button onClick={()=>navigate("/navigation")} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Back</button>
                        </th>
                    </tr>
            </thead>
            {!loading &&(
                 <tbody>
                    {fridge.map((fridge)=>(
                        <Fridge fridge={fridge} deleteProduct = {deleteProduct} key={fridge.product_id}/>
                    ))}
                 </tbody>
            )}
        </table>
    </div>
  )
}

export default FridgeList