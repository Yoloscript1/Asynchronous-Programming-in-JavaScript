async function concurrentRequests() {
    try {
      // Make two API requests concurrently
      const [result1, result2] = await Promise.all([
        fetch('https://api.example.com/endpoint1'),
        fetch('https://api.example.com/endpoint2')
      ]);
  
      // Extract the JSON data from the responses
      const data1 = await result1.json();
      const data2 = await result2.json();
  
      // Log the combined results
      console.log('Result 1:', data1);
      console.log('Result 2:', data2);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Example usage:
  concurrentRequests();
  