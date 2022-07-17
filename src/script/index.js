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
    DOM.search.submitBtn.addEventListener('click', () => {
      const searchResults = getSearchResults(data)
      DOM.games.wrapperGames.innerHTML = ''
      renderArticles(searchResults)

    })
  }

  const addSearchInputHandler = () => {
    DOM.search.input.addEventListener('input', () => DOM.search.input.value)
  }

  const addSearchFormHandler = () => {
    DOM.search.form.addEventListener('submit', (e) => {
      e.preventDefault()
      return DOM.search.input.value
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

  const renderArticles = (data) => {
    const articles = generateArticles(data)
    articles.forEach(article => DOM.games.wrapperGames.append(article.generateArticle()))
  }

  // ============= SEARCH =============

  const getSearchResults = (data) => {
    const inputValue = DOM.search.input.value
    const searchResult = data.filter(article => article.title.toLowerCase().includes(inputValue.toLowerCase()))
    return searchResult
  }

  



  addSearchInputHandler()
  addSearchSubmitHandler()
  addSearchFormHandler()

  renderArticles(data)


}