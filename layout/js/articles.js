let article_templete = document.getElementById('article-templete');
let articles = document.getElementById('articles');

for (let i = 0; i <= 5; i++) {
    let clone = article_templete.cloneNode(true);
    clone.removeAttribute('id');
    
    let h2 = clone.getElementsByTagName('h2')[0];
    h2.innerHTML = h2.textContent + ' ' + i;
    
    articles.appendChild(clone);    
}