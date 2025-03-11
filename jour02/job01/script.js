
function citation() {
  const btn = document.getElementById('button');
  btn.addEventListener("click", () => {
    const article = document.getElementById('citation');
    console.log(article.textContent);
    
  })
}

citation();
