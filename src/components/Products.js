import React from 'react'

const Products = ({product}) => {

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
        </tr>
    )
}

export default Products