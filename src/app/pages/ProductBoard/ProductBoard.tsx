import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../../healper/Data'
import { cartActions } from '../../store/CartSlice';
import { RootState } from '../../store/store';

interface Item {
    id: number;
    name: string;
    quantity: number;
    des: string;
    price: number;
    maxQuantity: number;
}

const ProductBoard = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (item: Item) => {
        if (item.quantity < item.maxQuantity) {
            const updatedItem = { ...item, quantity: item.quantity + 1 };
            dispatch(cartActions.addToCart(updatedItem));
        }
    };

    const handleRemoveFromCart = (itemId: number) => {
        const item = cartItems.find((item) => item.id === itemId);
        if (item && item.quantity > 1) {
            const newQuantity = item.quantity - 1;
            dispatch(cartActions.removeToCart({ itemId, quantity: newQuantity }));
        }
    };

    return (
        <div className='mt-20'>
            <h1 className='font-bold  text-center text-2xl'>Product</h1>
            <div className='flex justify-around center flex-wrap items-center w-full  '>
                {data.items.map((item, index) => {
                    return (
                        <div className=' mb-4 bg-gray-100 w-[25rem] rounded drop-shadow-md ' key={item.id}>
                            <div className='flex justify-between m-2'>
                                <h3>{item.name}</h3>
                                <span> Qty - {item.maxQuantity}</span>
                            </div>
                            <p>{item.des} </p>
                            <span className='p-1 text-xl'>Price : ${item.price}</span>
                            <div className='flex justify-between text-center m-2'>
                                <div>
                                    <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black' onClick={() => handleRemoveFromCart(item.id)}>-</button>
                                    <span className='p-3'>
                                        {cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
                                    </span>
                                    <button className='font-bold text-xl border px-3 py-2 bg-gray-400 text-black' onClick={() => handleAddToCart(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductBoard