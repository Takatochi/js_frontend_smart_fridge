
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FridgeService from "../../services/FridgeService";
import RecipeDetails from "./RecipeDetails";


const RecipeDetailsList = ()=>{

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [prRecipe, setPrRecipes] = useState([]);
    const [recipe, setRecipes] = useState({
      recipe_id:prRecipe.recipes_id,
      recipe: ""
      
  });
    const handleChange = (e)=>{
        const value = e.target.value;
        setPrRecipes({...prRecipe, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("==========get by id first============" + id);
            const response = await FridgeService.recipeDetails(id);
            console.log("==========get by id second============" + id);
            setPrRecipes(response.data);
            console.log("==========pr length============" + response.data.length);
            
            
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData(false);
      }, []);


     
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("==========get by id first============" + recipe.id);
            const response = await FridgeService.getRecipeById(id);
            console.log("==========get by id second============" + recipe.id);
            setRecipes(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      return(
        <div className='flex max-w-2xl shadow mx-auto border-b'>
            <div className='px-8 py-8'>
                <div className='font-thin text-4xl tracking-wider'>
                    <h1>{recipe.recipe}</h1>
                </div>

                <div className='font-thin text-2xl tracking-wider'>
                    <h3>Ingridients</h3>
                </div>

        
        {!loading &&(
                 <div>
                    {prRecipe.map((prRecipe)=>(
                        <RecipeDetails prRecipe={prRecipe} key={prRecipe.product_id}/>
                    ))}
                 </div>
            )}

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button onClick={()=>navigate("/recipes")} className='rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-6'>
                Cancel
            </button>
        </div>

            </div>
            
        </div>

      )

}

export default RecipeDetailsList;