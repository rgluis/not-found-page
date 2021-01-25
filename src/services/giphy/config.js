const giphyConfig = {
    endpoints: (path) => {
        let newPath = path.split('.');

        const endpoints = {
            gif: {
                search: '/gifs/search',
                random: '/gifs/random',
            },
        };

        return endpoints[newPath[0]][newPath[1]];
    }
};

export default giphyConfig;