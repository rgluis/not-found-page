import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';

function Page () {
    return (
        <div className="
            bg-gray-100
            flex
            h-full
            items-center
            flex-col
            p-4
            rounded
            shadow"
        >
            <div className="container flex-grow flex flex-col">
                <Header />
                <Content />
            </div>
        </div>
    );
}

export default Page;