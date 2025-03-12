function showhide() {
  const btn = document.getElementById('button');
  let article = document.createElement("article");
  article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

  btn.addEventListener('click', () => {
      if (document.body.contains(article)) {
          document.body.removeChild(article);
      } else {
          document.body.appendChild(article);
      }
  });
}

showhide();

