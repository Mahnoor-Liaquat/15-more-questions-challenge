// Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

function RegularFunction() {
    this.value = 1;
    this.regularMethod = function() {
      setTimeout(function() {
        this.value++;
        console.log("Regular Function:", this.value);
      }, 1000);
    };
  }
  
  const regularInstance = new RegularFunction();
  regularInstance.regularMethod(); 
  
  const ArrowFunction = function() {
    this.value = 1;
    this.arrowMethod = () => {
      setTimeout(() => {
        this.value++; 
        console.log("Arrow Function:", this.value);
      }, 3000);
    };
  };
  
  const arrowInstance = new ArrowFunction();
  arrowInstance.arrowMethod();
  