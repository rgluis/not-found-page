import React from 'react';
import Loading from '../Loading/Loading';

function NotFoundImage({image, isLoading}) {
    return(
        isLoading
            ? <Loading />
            : <img
            src={image}
            className="w-full h-auto"
        />
    );
}

export default NotFoundImage;