import React from 'react';
import NotFoundImageContainer from '../NotFoundImage/NotFoundImageContainer';

function Content() {
    return(
        <div className="w-full md:flex-grow flex justify-center items-center h-full flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:m-0 flex items-center justify-center px-8">
                <NotFoundImageContainer />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8">
                <h1 className="font-serif text-7xl mb-16">Bad news for you</h1>
                <p className="font-sans text-4xl">The page that you're looking for do not exists</p>
            </div>
        </div>
    );
}

export default Content;