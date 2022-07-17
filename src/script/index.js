import { Article } from "./Article.js"
import { data } from "./Storage.js"

//============= DOM ELEMENTS =============

const DOM = {
  search: {
    input: document.querySelector('.filter-search__input'),
    submitBtn: document.querySelector('.filter-search__submit'),
    form: document.querySelector('.search-form')
  },
  games: {
    wrapperGames: document.querySelector('.wrapper-games'),
  }
}



window.onload = () => {
  //============= HANDLERS =============

const addSearchSubmitHandler = () => {
  DOM.search.submitBtn.addEventListener('click', () => getSearchInputValue())
}

const addSearchInputHandler = () => {
  DOM.search.input.addEventListener('input', () => getSearchInputValue())
}

const addSearchFormHandler = () => {
  DOM.search.form.addEventListener('submit', (e) => {
    e.preventDefault()
    getSearchInputValue(e)
  })
}

  // ============= GAME ARTICLES =============

  const generateArticles = (data) => {
    let articles = []
    data.forEach(obj => {
      articles.push(new Article(obj))
    });
    return articles
  }

  const renderArticles = () => {
    const articles = generateArticles(data)
    articles.forEach(article => DOM.games.wrapperGames.append(article.generateArticle()))
  }

  const getSearchInputValue = (e) => {

    console.log(DOM.search.input.value)
    return DOM.search.input.value

  }

  



  addSearchInputHandler()
  addSearchSubmitHandler()
  addSearchFormHandler()

  renderArticles()


}