async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      console.log(value);
    }
  }
  
  // Example usage:
  const values = [1, 2, 3, 4, 5];
  
  iterateWithAsyncAwait(values);
  