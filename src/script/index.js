'use strict'

import { Article } from "./Article.js"
import { data } from "./Storage.js"


//============= DOM ELEMENTS =============

const DOM = {
  search: {
    input: document.querySelector('.filter-search__input'),
    submitBtn: document.querySelector('.filter-search__submit'),
    form: document.querySelector('.search-form')
  },
  sort: {
    select: document.querySelector('.filter-sort__select'),
  },
  games: {
    wrapperGames: document.querySelector('.wrapper-games'),
  },
}

window.onload = () => {

  //============= HANDLERS =============

  const addSearchSubmitHandler = () => {
    DOM.search.submitBtn.addEventListener('click', () => {
      const searchResults = getSearchResults(data)
      DOM.games.wrapperGames.innerHTML = ''
      store.storeArticles(searchResults)
      renderArticles()

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
    // const articles = generateArticles(data)
    const articles = store.articles
    articles.forEach(article => DOM.games.wrapperGames.append(article.generateArticle()))
  }

  // ============= SEARCH =============

  const getSearchResults = (dataFromStore) => {
    const inputValue = DOM.search.input.value
    const searchResult = dataFromStore.filter(article => article.title.toLowerCase().includes(inputValue.toLowerCase()))
    return searchResult
  }

  // ============= SORT =============

const sortByName = (direction) => { 
  const value = DOM.sort.select.value
  
  switch (value) {
    case 'by-name-up':
      sort()
      break;
  
    default:
      break;
  }
}

const sort = () => { 

 }

sortByName()

//============= STORE =============

const store = {
  articles: [],

  storeArticles(data) {
    this.articles = generateArticles(data)
  }
}


//============= INIT =============

const init = () => {

  DOM.search.input.focus()

  addSearchInputHandler()
  addSearchSubmitHandler()
  addSearchFormHandler()

  store.storeArticles(data)
  renderArticles()
  
}

init()
}