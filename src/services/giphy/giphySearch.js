import giphyService from "./instance";
import giphyConfig from "./config";

const endpoint = giphyConfig.endpoints('gif.search')

const giphySearch = (query) => {
    return giphyService.get(`${endpoint}?q=${query}&limit=5`);
};

export default giphySearch;