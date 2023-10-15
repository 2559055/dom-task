// Write your code here!
// Remove the 'main#main' element
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create 'newHeader' variable that points to the 'victory' element and update its text
const newHeader = document.getElementById('vina');
if (newHeader) {
  newHeader.textContent = "zaki";
}
