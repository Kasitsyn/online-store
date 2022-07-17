import { Article } from "./Article.js"
import { data } from "./Storage.js"


window.onload = () => {

  const generateArticles = (data) => {
    let articles = []
    data.forEach(obj => {
      articles.push(new Article(obj))
    });
    return articles
  }

  const renderArticles = () => {
    const articles = generateArticles(data)
    const wrapperGames = document.querySelector('.wrapper-games')
    articles.forEach(article => wrapperGames.append(article.generateArticle()))
  }

  

  renderArticles()


}