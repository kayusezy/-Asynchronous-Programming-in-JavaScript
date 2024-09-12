async function parallelCalls(urls) {
    const fetchFromUrl = (url) => new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), 1000));
    
    try {
      const results = await Promise.all(urls.map(url => fetchFromUrl(url))); // Fetch all URLs concurrently
      console.log('Responses:', results); // Log all responses
    } catch (error) {
      console.error('An error occurred:', error); // Log any errors
    }
  }
  
  // Example usage:
  parallelCalls(['https://api.example.com/endpoint1', 'https://api.example.com/endpoint2']);
  