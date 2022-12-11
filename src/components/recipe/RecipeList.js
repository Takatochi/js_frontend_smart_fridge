import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import FridgeService from '../../services/FridgeService';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom';

const RecipeList = () =>{

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [recipe, setRecipes] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                const response = await FridgeService.getAllRecipes();
                setRecipes(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData(false);
    }, []);


    const deleteRecipe =(e, recipe)=>{
        e.preventDefault();
        console.log(">>>>> deleteProduct Product: "+recipe.id);
        console.log(">>>>> deleteProduct Fridge: "+recipe.id);     

        FridgeService.deleteRecipe(recipe).then((res)=>{
            console.log(">>>>> deleteProduct is done");  
            if(recipe){
                console.log(">>> FridgeService.deleteProductFromFridge()"+ recipe.id);
                setRecipes((prevElement)=>{
                    //return window.location.reload();
                    console.log(">>> prevElement "+ recipe.id);
                    return prevElement.filter((rec)=> rec.id !== recipe.id);
                });
            }
        }).catch((error)=>{
            console.log(error);
        });
    };


 return (
    
    <div className='flex'>
        All recipes
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
                    {recipe.map((recipe)=>(
                        <Recipe recipe={recipe} deleteRecipe={deleteRecipe} key={recipe.id}/>
                    ))}
                 </tbody>
            )}
        </table>
    </div>
  )


}

export default RecipeList