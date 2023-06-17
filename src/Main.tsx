import React from 'react';
import Header from './app/components/Layout/Header';
import Sidebar from './app/components/Layout/SideBar';
import ProductBoard from './app/pages/ProductBoard/ProductBoard';


const Main = () => {
    return (
        <>
            <Header /> 
            <main className="ml-64">
                <ProductBoard />
            </main>
        </>
    )
}

export default Main