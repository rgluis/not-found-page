import React from 'react';
import LoadingImage from '../../images/loading.svg';

function Loading() {
    return(
        <img
            src={LoadingImage} 
            className="h-24" 
        />
    );
}

export default Loading;