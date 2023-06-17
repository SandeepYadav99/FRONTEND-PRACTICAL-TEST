import CheckOut from "../../pages/CheckOut/CheckOut";
import Sidebar from "./SideBar";

const Header = (): JSX.Element => {
    return (
        <div className="bg-slate-200">
            <header className="flex justify-between p-4 w-[100%] ">
                <h1 className="black text-xl">Logo Ispm</h1>
                <div className="flex w-[20%] justify-between">
                    <p><span>( 0 )</span> item</p>
                    <span>Total Amount</span>
                </div>
            </header>
            <aside className="w-64 bg-gray-800 text-white fixed h-screen">
               <Sidebar/>
            </aside>
           
        </div>
    );
};

export default Header;