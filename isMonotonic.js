function isMonotonic(array) {
	
	
    // Write your code here.
      //check to see if j is less than or equal to i
      
  
      if(array.length <= 2) return true;
      
      let direction = array[1] - array[0];
      for(let i = 2; i < array.length; i++) {
          if(direction === 0) {
              direction = array[i] - array[i - 1];
          continue;
          }
      if (breaksDirection(direction, array[i - 1], array[i])) {
          return false;
      }
  }
      return true;
  }
  
  function breaksDirection(direction, previousInt, currentInt) {
      const difference = currentInt - previousInt; 
      if(direction > 0) return difference < 0;
          return difference > 0;
  }