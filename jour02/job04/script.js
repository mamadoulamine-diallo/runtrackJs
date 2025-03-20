const textarea = document.getElementById('keylogger');
window.addEventListener('keypress',(e) => {
  console.log(e.target.value);
  
  let value = e.key;
  textarea.innerHTML = value;
  
  
})