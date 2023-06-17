import React from 'react'
import Header from '../../components/Layout/Header'

const CheckOut = () => {
    return (
        <>
            <Header />
            <div className="ml-64">
                <div>
                    <div className='flex justify-around '>
                        <span>id</span>
                        <span>Name</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Total</span>
                    </div>
                    <div className='flex justify-around '>
                        <span>1</span>
                        <span>Product 1</span>
                        <span>100</span>
                        <span>2</span>
                        <span>$200</span>
                    </div>
                    <div className='flex justify-around '>
                        <span>2</span>
                        <span>Product 2</span>
                        <span>300</span>
                        <span>2</span>
                        <span>$600</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut