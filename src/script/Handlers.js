//============= HANDLERS =============

import { getSearchResults, renderArticles, sortByName } from "./index.js"
import { storageData, store } from "./Storage.js"
import { DOM } from "./UI.js"

export const addSearchSubmitHandler = () => {
  DOM.search.submitBtn.addEventListener('click', () => {
    const searchResults = getSearchResults(storageData)
    store.createArticles(searchResults)
    renderArticles(store.articles)

  })
}

export const addSearchInputHandler = () => {
  DOM.search.input.addEventListener('input', () => DOM.search.input.value)
}

export const addSearchFormHandler = () => {
  DOM.search.form.addEventListener('submit', (e) => {
    e.preventDefault()
    return DOM.search.input.value
  })
}

export const addSortSelectHandler = () => {
  DOM.sort.select.addEventListener('change', () => {
    store.storeArticles(sortByName(store.articles))
    renderArticles(store.articles)
  })
}