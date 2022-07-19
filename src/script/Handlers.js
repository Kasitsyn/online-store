//============= HANDLERS =============

import { createAndRenderRangeSlider, filterArticles, filterByRange, getActiveFiltersOptions, getSearchResults, renderArticles, renderFilters, sortArticles } from "./index.js"
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

export const addRangeFilterHandler = () => {
  const yearRangeSlider = createAndRenderRangeSlider('range-slider-year', 'input-year-0', 'input-year-1', 1990, 2022)

  yearRangeSlider.noUiSlider.on('change', () => {
    store.createArticles(storageData)
    store.storeRangeFilters(yearRangeSlider.noUiSlider.get(true), 'year')
    // console.log(store.rangeFilters)
    const filteredArticles = filterByRange(store.articles, store.rangeFilters)
    store.storeArticles(filteredArticles)
    renderArticles(store.articles)
  })

  const rateRangeSlider = createAndRenderRangeSlider('range-slider-rating', 'input-rating-0', 'input-rating-1', 0, 10)
  rateRangeSlider.noUiSlider.on('change', () => {
    store.createArticles(storageData)
    store.storeRangeFilters(rateRangeSlider.noUiSlider.get(true), 'rating')
    // console.log(store.rangeFilters)
    const filteredArticles = filterByRange(store.articles, store.rangeFilters)
    store.storeArticles(filteredArticles)
    renderArticles(store.articles)
  })


  

}

