import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FridgeService from "../../services/FridgeService";

const UpdateRecipe = ()=>{

    const {id} = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipes] = useState({
        id:id,
        recipe: ""
        
    });

    const handleChange = (e)=>{
        const value = e.target.value;
        setRecipes({...recipe, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("==========get by id first============" + recipe.id);
            const response = await FridgeService.getRecipeById(recipe.id);
            console.log("==========get by id second============" + recipe.id);
            setRecipes(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const updateRecipe = (e) => {
        e.preventDefault();
        console.log(recipe);
        FridgeService.updateRecipe(recipe, id)
          .then((response) => {
            navigate("/allRecipe");
          })
          .catch((error) => {
            console.log(error);
          });
      };


      return(
        <div className='flex max-w-2xl shadow mx-auto border-b'>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Update product</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>
                recipe
            </label>
            <input type='text'
             name='recipe'
             value={recipe.recipe} 
             onChange={(e)=> handleChange(e)}
             className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        

        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button onClick={updateRecipe} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                Update
            </button>
            <button onClick={()=>navigate("/allRecipe")} className='rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-6'>
                Cancel
            </button>
        </div>
            </div>
        </div>

      )


}
export default UpdateRecipe;