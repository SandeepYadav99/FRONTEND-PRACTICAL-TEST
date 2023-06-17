import React from 'react'

import data from '../../healper/Data'

const ProductBoard = () => {
    return (
        <div className='mt-20'>
            <h1>Product</h1>
            <div className='flex justify-around center flex-wrap items-center w-full  '>
                {data.items.map((item, index) => {
                    return (
                        <div className=' mb-4 bg-gray-100 w-[25rem] rounded drop-shadow-md '>
                            <div className='flex justify-between m-2'>
                                <h3>{item.name}</h3>
                                <span> Qty - {item.quantity}</span>
                            </div>
                            <p>{item.des} </p>
                            <span className='p-2 text-xl'>${item.price}</span>
                            <div className='flex'>
                                <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>-</button>
                                <input type="text" className='p-2 w-10' />
                                <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>+</button>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default ProductBoard