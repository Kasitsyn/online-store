'use strict'

import { init } from "./Init.js"
import { storageData, store } from "./Storage.js"
import { DOM } from "./UI.js"

// ============= RENDER =============

export const renderArticles = (articles) => {
  DOM.games.wrapperGames.innerHTML = ''
  articles.forEach(article => DOM.games.wrapperGames.append(article.generateArticle()))
}

export const renderFilters = (filters, e) => {
  const tags = document.querySelectorAll('.filter__btn')

  tags.forEach(tag => {
    filters.has(tag.innerText) ? tag.classList.add('filter__btn--active') : tag.classList.remove('filter__btn--active')
  })
}

// ============= SEARCH =============

export const getSearchResults = (dataFromStore) => {
  const inputValue = DOM.search.input.value
  const searchResult = dataFromStore.filter(article => article.title.toLowerCase().includes(inputValue.toLowerCase()))
  return searchResult
}

// ============= SORT =============

export const sortArticles = (articles) => {
  const value = DOM.sort.select.value || 'by-name-up'
  const sortArticles = [...articles]
  const collator = new Intl.Collator('en', { sensitivity: 'base' });

  const sort = (props) => {
    value.includes('up') ?
      sortArticles.sort((x, y) => collator.compare(x[props], y[props])) :
      sortArticles.sort((x, y) => collator.compare(y[props], x[props]))
  }

  switch (value) {
    case 'by-name-up':
      sort('title')
      break;
    case 'by-name-down':
      sort('title')
      break;
    case 'by-year-up':
      sort('year')
      break;
    case 'by-year-down':
      sort('year')
      break;
    case 'by-rating-up':
      sort('rating')
      break;
    case 'by-rating-down':
      sort('rating')
      break;
    default:
      break;
  }
  return sortArticles

}

// ============= FILTER =============

export const filtersByValueHandler = (e, filtersActive) => {
  const filterOptions = new Set(filtersActive)

  if (e.target.className.includes('filter__btn')) {
    const tag = e.target
    filterOptions.has(tag.innerText) ?
      filterOptions.delete(tag.innerText) :
      filterOptions.add(tag.innerText)
  }


  // console.log(filterOptions)
  return filterOptions
}


init()
