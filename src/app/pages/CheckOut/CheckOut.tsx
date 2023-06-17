import React from 'react'
import Header from '../../components/Layout/Header'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { cartActions } from '../../store/CartSlice';

const CheckOut = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handalDelete = () => {
        dispatch(cartActions.clearCart())
    }

    return (
        < div className='mt-20'>
            <Header />
            {cartItems.length > 0 && <div className="ml-64 ">
                <div>
                    <div className='flex justify-around '>
                        <span>id</span>
                        <span>Name</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Total</span>
                    </div>

                    {cartItems.map((item, index) => {
                        return (
                            <div className='flex justify-around '>
                                <span>{item.id}</span>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                                <span>{item.quantity}</span>
                                <span>${item.price * item.quantity}</span>
                            </div>
                        )
                    })}

                </div>
                <div className='text-right mr-20 mt-10'>
                    <button className='text-white bg-gray-500 p-2 rounded' onClick={() => handalDelete()}>Delete All</button>
                </div>
            </div>}
            <div className='text-center '>
                {cartItems.length <= 0  && <h1 className='text-gray-500 text-3xl'>Cart is Empty </h1> }
            </div>

        </div>
    )
}

export default CheckOut