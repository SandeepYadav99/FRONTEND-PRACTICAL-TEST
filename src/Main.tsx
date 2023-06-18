import React from 'react';
import Header from './app/components/Header';
import ProductBoard from './app/pages/ProductBoard/ProductBoard';

const Main = (): JSX.Element => {
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