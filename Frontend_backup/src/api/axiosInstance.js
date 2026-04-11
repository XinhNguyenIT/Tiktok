const { default: axios } = require('axios');

export const axioslnstance = await axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
