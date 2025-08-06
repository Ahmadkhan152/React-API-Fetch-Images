import Axios from 'axios';

const GetImages = async ( term ) => {
    try {
        const response = await Axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID Fgo9hB8bjNKF4Bjp5pgHqb8UcDfh_PbmmJ6ZxKMhZKQ'
            },
            params: {
                query: term
            }
        })
        return response.data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

export default GetImages;