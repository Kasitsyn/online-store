export class Article {
  constructor({ id, urlToImg, title, genre, company, platform, year, rating, ...rest }) {
    this.id = id
    this.urlToImg = urlToImg
    this.title = title
    this.genre = genre
    this.company = company
    this.platform = platform
    this.year = year
    this.rating = rating
  }

  //Article generation

  generateArticle() {
    let template = ''
    let article = document.createElement('article')
    article.className = ('game-card')
    article.setAttribute('data-id', this.id)

    this.urlToImg &&
      (template += `<div class="image-wrapper"><img class="game-card__image" src=${this.urlToImg} alt="game picture"></div>`)

    this.title &&
      (template += `<h4 class="game-card__title">${this.title.toUpperCase()}</h4>`)

    template += `<ul class="game-card__list">`

    this.genre &&
      (template += `<li class="game-card__item">Genre: ${this.genre}</li>`)

    this.year &&
      (template += `<li class="game-card__item">Year: ${this.year}</li>`)

    this.platform &&
      (template += `<li class="game-card__item">Platform: ${this.platform}</li>`)

    this.company &&
      (template += `<li class="game-card__item">Company: ${this.company}</li>`)

    this.rating &&
      (template += `<li class="game-card__item">Rating: ${this.rating}</li>`)

    article.innerHTML = template
    return article
  }
}

export const generateArticles = (data) => {
  let articles = []
  data.forEach(obj => {
    articles.push(new Article(obj))
  });
  return articles
}