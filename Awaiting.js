
  async function awaitCall() {
    // Simulate fetching data from an API
    const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Fetched Data'), 2000));
    
    const data = await fetchData(); // Await the simulated API call
    console.log(data); // Log the data
  }
  
  // Example usage:
  awaitCall();
  
  