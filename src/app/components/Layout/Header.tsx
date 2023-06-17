import CheckOut from "../../pages/CheckOut/CheckOut";
import { RootState } from "../../store/store";
import Sidebar from "./SideBar";
import { useSelector } from 'react-redux'
const Header = (): JSX.Element => {
    const subtotal = useSelector((state: RootState) => state.cart.subtotal);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <header className="flex justify-between p-4 w-[100%] fixed top-0 z-10 bg-gray-600 text-white">
                <h1 className="black text-xl">Logo Ispm</h1>
                <div className="flex w-[20%] justify-between">
                    <p><span>({totalQuantity})</span> item in Cart - </p>
                    <span>Total Amount ${subtotal}</span>
                </div>
            </header>
            <aside className="w-64 top-0 bg-gray-800 text-white fixed h-screen m">
                <Sidebar />
            </aside>

        </>
    );
};

export default Header;