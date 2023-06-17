import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../../healper/Data'
import { cartActions } from '../../store/CartSlice';
import { RootState } from '../../store/store';

const ProductBoard = () => {
    const dispatch = useDispatch();
    const [quantityInput, setQuantityInput] = useState('');
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    console.log(totalQuantity, 'Qty')


    const handleAddToCart = (item: any) => {
        const updatedQuantity = parseInt(quantityInput) + 1;
        dispatch(cartActions.addToCart(item));
        setQuantityInput(updatedQuantity.toString())
    };

    const handleRemoveFromCart = (itemId: number) => {
        const item = cartItems.find((item) => item.id === itemId);
        if (item && item.quantity > 1) {
            const newQuantity = item.quantity - 1;
            dispatch(cartActions.updateCartItemQuantity({ itemId, quantity: newQuantity }));
        }
    };

    const handleQuantityChange = (id: any, value: any) => {
        setQuantityInput(value.toString());
        dispatch(cartActions.updateCartItemQuantity({ itemId: id, quantity: value }))
    }

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
                                <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black' onClick={() => handleRemoveFromCart(item.id)}>-</button>

                                {/* <input type="text" className='p-2 w-10' value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} />
                                 */}
                                <input
                                    type='number'
                                    className='p-2 w-10'
                                    value={item.id === parseInt(quantityInput) ? quantityInput : item.quantity}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value);
                                        if (!isNaN(value)) {
                                            setQuantityInput(e.target.value);
                                        }
                                    }}
                                    onBlur={() => handleQuantityChange(item.id, parseInt(quantityInput))}
                                />
                                <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black' onClick={() => handleAddToCart(item)}>+</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductBoard