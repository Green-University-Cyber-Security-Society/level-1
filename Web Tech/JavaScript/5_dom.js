


const btn = document.getElementById('myButton');
const out = document.getElementById('output');

if (btn) {
  btn.addEventListener('click', () => {
    out.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
  });
}
