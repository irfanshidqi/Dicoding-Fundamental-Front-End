import "./article-item.js"
 
 
class ArticleList extends HTMLElement {
 set articles(articles) {
   this._articles = articles;
   this.render();
   console.log(this._articles);

 }
 
 
 render() {
   this._articles.forEach(article => {
     const articleItemElement = document.createElement("article-item");
     console.log(article);
     // memanggil fungsi setter article() pada article-item.
     articleItemElement.article = article;
     this.appendChild(articleItemElement);

   })
 }
}
 
customElements.define("article-list", ArticleList);