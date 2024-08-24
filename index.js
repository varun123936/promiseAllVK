const axios = require('axios');

async function fetchUserDataAndPosts() {
    const userApiUrl = 'https://jsonplaceholder.typicode.com/users/1';
    const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';

    try {
        // Using Promise.all to fetch both user data and posts concurrently
        const [userResponse, postsResponse] = await Promise.all([
            axios.get(userApiUrl),
            axios.get(postsApiUrl),
        ]);

        // Extracting data from the responses
        const userData = userResponse.data;
        const postsData = postsResponse.data;

        // Displaying the data
        console.log('User Data:', userData);
        console.log('Posts:', postsData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchUserDataAndPosts();
