// Suppose you’re making an API call in JavaScript, and it fails. How would you retry the request a few times with a delay between each attempt — without requiring the user to click again?

async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      return data; // Success!
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retry
    } else {
        throw new Error('All attempts failed');
      }
    }
  }
}

fetchWithRetry('https://api.example.com/data', 3, 2000)
  .then(data => console.log('Data received:', data))
  .catch(err => console.error('Final error:', err.message));