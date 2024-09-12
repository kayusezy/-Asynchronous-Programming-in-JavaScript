async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data from API 1'), 2000));
    const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data from API 2'), 1500));
    
    try {
      const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]); // Await both API calls concurrently
      console.log('Combined Results:', result1, result2); // Log the combined results
    } catch (error) {
      console.error('An error occurred:', error); // Log any errors
    }
  }
  
  // Example usage:
  concurrentRequests();
  