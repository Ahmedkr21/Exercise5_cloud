function performMultiplication() {
  event.preventDefault();
  const userInput = parseFloat(prompt("Calculating the cost per hour to use cloud, enter the number of hours:"));

  if (!isNaN(userInput)) {
      const result = userInput * 0.15;
      alert(`The cost is: $${result.toFixed(2)}`);
  } else {
      alert("Invalid input. Please enter a valid number.");
  }
}
