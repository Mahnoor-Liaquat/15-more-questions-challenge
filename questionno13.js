// Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    const taxRate = income > 50000 ? 0.2 : income > 20000 ? 0.15 : 0.1;
    const taxAmount = income * taxRate;
    return taxAmount;
  }
  
  // Example usage:
  const income1 = 25000;
  const tax1 = calculateTax(income1);
  console.log(`Tax for income $${income1}: $${tax1}`);
  
  const income2 = 60000;
  const tax2 = calculateTax(income2);
  console.log(`Tax for income $${income2}: $${tax2}`);
  