async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data. Please try again later.');
      }
  
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  
  // Example usage:
  awaitCall();
  