import { useNavigate } from 'react-router-dom';
import React from 'react';
import FridgeService from '../../services/FridgeService';

function AddNewProduct(){

    const navigate = useNavigate();

    const [product, setProduct] = React.useState({
        id:"",
        name: "",
        measure: "",
        cost:""
    });

    const handleChange = (e)=>{
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value});
    };

    const saveProduct = (e)=>{
        e.preventDefault();
        FridgeService.addNewProductInList(product).then((res)=>{
            console.log(res);
            navigate("/allProducts");
        }).catch((error)=>{
            console.log(error);
        });

    };

    const reset = (e)=>{
        e.preventDefault();
        setProduct({
            id:"",
            name: "",
            measure: "",
            cost:""
        });
    };

    return(
        <div className='flex max-w-2xl shadow mx-auto border-b'>
            <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add new product</h1>
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
                <button onClick={saveProduct} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                    Save
                </button>
                <button
                onClick={reset}
                className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                    Clear
                </button>
                <button onClick={()=>navigate("/allProducts")} className='rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-6'>
                    Back
                </button>
            </div>

            </div>

        </div>
    )

}
export default AddNewProduct;