import axios from 'axios';

export const databaseQuery = async (options, data) => {
    const { url, method = 'GET' } = options;

    const response = await axios({
        url,
        method,
        data
    }); 

    return response.data;
} 