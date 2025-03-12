let count = 0;
function addOne() {
  const btn = document.getElementById('button');
  const compteur = document.getElementById('compteur');
  btn.addEventListener('click',() => {
   count++;
   compteur.textContent = count;
 
  
})
}

addOne();