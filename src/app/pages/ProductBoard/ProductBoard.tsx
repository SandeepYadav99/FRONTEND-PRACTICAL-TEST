import React from 'react'
import Sidebar from '../../components/Layout/SideBar'

const ProductBoard = () => {
    return (
        <>
            <h1>Product</h1>
            <div className='flex justify-around center flex-wrap items-center w-full  '>
                <div className=' mb-4 bg-gray-100 w-[25rem] rounded drop-shadow-md '>
                    <div className='flex justify-between m-2'>
                        <h3>Product 1</h3>
                        <span>Quan - 3</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing . </p>
                    <span>$100</span>
                    <div className='flex'>
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>-</button>
                        <input type="text" className='p-2 w-10' />
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>+</button>
                    </div>
                </div>
                <div className='  bg-gray-100 w-[25rem] rounded drop-shadow-md '>
                    <div className='flex justify-between m-2'>
                        <h3>Product 1</h3>
                        <span>Quan - 3</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing . </p>
                    <span>$100</span>
                    <div className='flex'>
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>-</button>
                        <input type="text" className='p-2 w-10' />
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>+</button>
                    </div>
                </div>

                <div className='  bg-gray-100 w-[25rem] rounded drop-shadow-md '>
                    <div className='flex justify-between m-2'>
                        <h3>Product 1</h3>
                        <span>Quan - 3</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing . </p>
                    <span>$100</span>
                    <div className='flex'>
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>-</button>
                        <input type="text" className='p-2 w-10' />
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>+</button>
                    </div>
                </div>

                <div className='  bg-gray-100 w-[25rem] rounded drop-shadow-md '>
                    <div className='flex justify-between m-2'>
                        <h3>Product 1</h3>
                        <span>Quan - 3</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing . </p>
                    <span>$100</span>
                    <div className='flex'>
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>-</button>
                        <input type="text" className='p-2 w-10' />
                        <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black'>+</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductBoard