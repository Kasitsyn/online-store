//============= HANDLERS =============

import { filterArticles, getActiveFiltersOptions, getSearchResults, renderArticles, renderFilters, sortArticles } from "./index.js"
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
    store.storeArticles(sortArticles(store.articles))
    renderArticles(store.articles)
  })
}

export const addFilterTagsHandler = () => {
  DOM.filters.filtersByValue.addEventListener('click', (e) => {

    store.createArticles(storageData)

    const activeFilters = getActiveFiltersOptions(e, store.filtersActive)
    store.storeFiltersActive(activeFilters)
    
    const filteredArticles = filterArticles(store.articles, store.filtersActive)
    store.storeArticles(filteredArticles)
    
    renderFilters(store.filtersActive, e)
    renderArticles(store.articles)

    console.log(store.filtersActive)
    console.log(store.articles)

  })

}