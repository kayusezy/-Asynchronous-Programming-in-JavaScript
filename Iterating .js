async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait(['Value 1', 'Value 2', 'Value 3']);