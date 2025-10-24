const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const result = document.getElementById('result');


// <input type="text" id="name" name="username" placeholder="Your name">
// If you Want direct value: document.getElementById('name').value

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();


    // How to Convert String into number: const age = parseInt(ageInput.value);  
    const raw = nameInput.value;
    const safe = stripTags(raw).trim();
    if (!safe) {
      alert('Please enter a name.');
      return;
    }
    result.textContent = 'Hello, ' + safe;
  });





}