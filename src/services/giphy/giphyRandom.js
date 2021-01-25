import giphyService from "./instance";
import giphyConfig from "./config";

const endpoint = giphyConfig.endpoints('gif.random')

const giphyRandom = (query) => {
    return giphyService.get(`${endpoint}?tag=${query}`);
};

export default giphyRandom;