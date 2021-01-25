import React, { useEffect, useState } from 'react';
import giphySearch from '../../services/giphy/giphySearch';
import NotFoundImage from './NotFoundImage';


function NotFoundImageContainer() {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        giphySearch('404 no found')
            .then(result => {
                const { data } = result.data;

                // Get random position of the array of images
                const position = Math.floor((Math.random() * (data.length - 1) ) + 1);
                const gif = data[position].images.original.url;
                
                setImage(gif);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return(
        <NotFoundImage image={image} isLoading={loading} />
    );
}

export default NotFoundImageContainer;