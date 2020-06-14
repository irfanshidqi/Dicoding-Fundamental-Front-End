import "./article-list.js";
import articles from "./articles.js";
 
 
const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;
console.log(articleListElement);
 console.log(articles);

document.body.appendChild(articleListElement);