import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FridgeService from "../../services/FridgeService";

const UpdateProduct =() =>{

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: id,
        name: "",
        measure: "",
        cost: ""
      });

      const handleChange = (e)=>{
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("==========get by id first============" + product.id);
            const response = await FridgeService.getProductByIdInList(product.id);
            console.log("==========get by id second============" + product.id);
            setProduct(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const updateProduct = (e) => {
        e.preventDefault();
        console.log(product);
        FridgeService.updateProduct(product, id)
          .then((response) => {
            navigate("/allProducts");
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
                name
            </label>
            <input type='text'
             name='name'
             value={product.name} 
             onChange={(e)=> handleChange(e)}
             className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    measure
                </label>
                <input type='text' 
                name='measure'
                value={product.measure}
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>
                cost
            </label>
            <input type='number' 
            name='cost'
            value={product.cost}
            onChange={(e)=> handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        

        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button onClick={updateProduct} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                Update
            </button>
            <button onClick={()=>navigate("/allProducts")} className='rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-6'>
                Cancel
            </button>
        </div>
            </div>
        </div>

      )

}
export default UpdateProduct;