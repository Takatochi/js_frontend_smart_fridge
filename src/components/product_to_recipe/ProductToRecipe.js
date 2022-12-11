import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FridgeService from '../../services/FridgeService';
import ChosenRecipe from './ChosenRecipe';

const ProductToRecipe = ()=>{

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [prRecipe, setRrRecipes] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                const response = await FridgeService.getAllRecipes();
                setRrRecipes(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData(false);
    }, []);



    return (
    
        <div className='flex'>
            recipes
            <table className='min-w-full position: relative'>
                
                <thead className='bg-gray-50'>
                <tr className='shadow bottom-border'>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                Name of recipe
                            </th>
                            <th>
                            <button onClick={()=>navigate("/addNewRecipe")} className='rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-700 py-2 px-6'>
                                Add new recipe
                            </button>
                            </th>
                            <th>
                            <button onClick={()=>navigate("/navigation")} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Back</button>
                            </th>
                        </tr>
                </thead>
                {!loading &&(
                     <tbody>
                        {prRecipe.map((recipe)=>(
                            <ChosenRecipe recipe={recipe} key={recipe.id}/>
                        ))}
                     </tbody>
                )}
            </table>
        </div>
      )


}

export default ProductToRecipe;