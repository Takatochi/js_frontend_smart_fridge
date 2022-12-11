import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChosenRecipe = ({recipe})=>{

    const navigate = useNavigate();
    
    const recipeDetail = (e, id)=>{
        e.preventDefault();
        navigate(`/recipeDetail/${id}`);
    };

return(
        <tr key={recipe.id}>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                {recipe.recipe}
                            </div>
                        </td>
                        
                        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                        <button onClick={(e, id)=> recipeDetail(e, recipe.id)}  className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>
                                +
                            </button>
                        </td>


                        {/* <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                            <a
                            onClick={(e, id) => editRecipe(e, recipe.id)}
                            className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                                Edit
                            </a>
                            <a onClick={deleteRec}  className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>
                                Delete
                            </a>
                        </td> */}
        </tr>
    )

}
export default ChosenRecipe