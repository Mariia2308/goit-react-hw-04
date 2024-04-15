import axios from 'axios';

const API_KEY = 'rDda-DYw7ufTodWT6G-Hy7GhdggSpnNFzHYRnB4_978';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.params = {
  client_id: API_KEY,
  orientation: 'landscape',
  per_page: 12,
};

export const getPhotos = async (query, page) => {
  const params = { query, page };
  const { data } = await axios.get('/', { params });


  const normalizeData = data.results.map(({ alt_description, id, urls }) => ({
    alt: alt_description,
    id,
    small: urls.small,
    regular: urls.regular,
  }));

  return { totalPhotos: data.total, photos: normalizeData };
};


  

