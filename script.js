const myName = document.getElementById('name-animation');
const nameLetters = myName.textContent.split('');

myName.textContent = ''; // Clear the existing content

// Add each letter back as a span
nameLetters.forEach(letter => {
  const letterSpan = document.createElement('span');
  letterSpan.textContent = letter;
  myName.appendChild(letterSpan);
});
