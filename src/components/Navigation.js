import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navigation = () => {

    const navigate = useNavigate();

    const getAllProducts= (e) =>{
        e.preventDefault();
        try {
            navigate("/allProducts");
        } catch (error) {
            console.log(error);
        }
        
    }

    const getAllFromFridge=(e)=>{
        e.preventDefault();
        try {
            navigate("/allFromFridge");
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
        <button onClick={getAllProducts} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
            All products
        </button>

        <button onClick={getAllFromFridge} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
            All in fridge
        </button>

    </div>
    
  )
}

export default Navigation