//============= HANDLERS =============

import { filterArticles, filterByPopular, filterByRange, getActiveFiltersOptions, getSearchResults, rateRangeSlider, renderArticles, renderFilters, sortArticles } from "./index.js"
import { yearRangeSlider } from "./index.js"
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
  DOM.sort.select.addEventListener('change', (e) => {
    const option = DOM.sort.select.value
    localStorage.setItem('sortValue', option)
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

    if (!store.filtersActive.size) {

      store.createArticles(storageData)
    }

    renderFilters(store.filtersActive, e)
    renderArticles(store.articles)

  })

}

export const addRangeFilterHandler = () => {

  yearRangeSlider.noUiSlider.on('change', () => {
    store.createArticles(storageData)
    store.storeRangeFilters(yearRangeSlider.noUiSlider.get(true), 'year')
    const filteredArticles = filterByRange(store.articles, store.rangeFilters)
    store.storeArticles(filteredArticles)
    renderArticles(store.articles)

  })

  rateRangeSlider.noUiSlider.on('change', () => {
    store.createArticles(storageData)
    store.storeRangeFilters(rateRangeSlider.noUiSlider.get(true), 'rating')
    const filteredArticles = filterByRange(store.articles, store.rangeFilters)
    store.storeArticles(filteredArticles)
    renderArticles(store.articles)


  })

}

export const addFilterPopularHandler = () => {
  DOM.filters.popularCheckbox.addEventListener('change', (e) => {

    store.isPopular === 'false' ? store.togglePopularFilters('true') : store.togglePopularFilters('false')
    store.storeArticles(filterByPopular(store.articles, store.isPopular))
    renderArticles(store.articles)
  })

}

export const addFilterResetBtnHandler = () => {
  DOM.filters.resetBtn.addEventListener('click', (e) => {
    store.createArticles(storageData)
    store.storeArticles(sortArticles(store.articles))
    store.storeFiltersActive(new Set())
    store.storeRangeFilters([1990, 2022], 'year')
    store.storeRangeFilters([0, 10], 'rating')
    yearRangeSlider.noUiSlider.set([1990, 2022])
    rateRangeSlider.noUiSlider.set([0, 10])
    renderFilters(store.filtersActive, e)
    renderArticles(store.articles)

  })
}

export const addFilterHardResetBtnHandler = () => {
  DOM.filters.hardResetBtn.addEventListener('click', (e) => {
    localStorage.clear()
  })
}



export const addGameCardHandler = () => {
  document.querySelectorAll('.game-card').forEach((el) => {
    el.addEventListener('click', (e) => {
      const mark = document.createElement('div')
      mark.classList.add('game-card-mark')
      if (e.currentTarget.lastElementChild.className !== 'game-card-mark') {
        e.currentTarget.append(mark)
        DOM.cart.cartValue.innerText = ++store.cartValue
        localStorage.setItem('articles', store.cartValue)
      } else {
        e.currentTarget.lastElementChild.remove()
        DOM.cart.cartValue.innerText = --store.cartValue
      }
    })

  })
}