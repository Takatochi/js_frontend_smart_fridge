import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({product, deleteProduct}) => {
    const navigate = useNavigate();
   
    const [goods, setPost] = useState([]);

//     useEffect(() => {
//     axios.get('url')
//         .then ((response)=> {
//          setPost(response.data)
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     })
//    goods.map((good, index) =>{
//         console.log(good)
//     })
    
    const editProduct = (e, id)=>{
        e.preventDefault();
        navigate(`/editProduct/${id}`);
    };

    const deletePr=(e)=>{
        console.log("product >>"+product.id);
         deleteProduct(e, product);
    };

    return(
        <tr key={product.id}>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                {product.name}
                                
                            </div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                {product.measure}
                            </div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                {product.cost + " uah"}
                                
                                
                            </div>
                        </td>

                        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                            <a
                            onClick={(e, id) => editProduct(e, product.id)}
                            className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                                Edit
                            </a>
                            <a onClick={deletePr}  className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>
                                Delete
                            </a>
                        </td>
        </tr>
    )
}

export default Products
