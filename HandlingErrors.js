async function awaitCall() {
    try {
      // Simulate fetching data from an API
      const fetchData = () => new Promise((resolve, reject) => setTimeout(() => reject('API Error'), 2000));
      
      const data = await fetchData(); // Await the simulated API call
      console.log(data); // Log the data
    } catch (error) {
      console.error('An error occurred:', error); // Log user-friendly error message
    }
  }
  
  // Example usage:
  awaitCall();
  