// Get the button and click count elements
const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

// Initialize the click counter
let counter = 0;

// Function to update the click count
function updateClickCount() {
  clickCount.textContent = counter;
}

// Event listener for the click button
clickButton.addEventListener('click', function() {
  // Increment the counter
  counter++;
  // Update the click count display
  updateClickCount();
});
