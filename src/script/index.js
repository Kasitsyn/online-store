'use strict'

import { addGameCardHandler } from "./Handlers.js"
import { init } from "./Init.js"
import { storageData, store } from "./Storage.js"
import { DOM } from "./UI.js"




// ============= RENDER =============

export const renderArticles = (articles) => {
  DOM.games.wrapperGames.innerHTML = ''
  articles.forEach(article => DOM.games.wrapperGames.append(article.generateArticle()))
  addGameCardHandler()

}

export const renderFilters = (filters, e) => {
  const tags = document.querySelectorAll('.filter__btn')

  tags.forEach(tag => {
    filters.has(tag.innerText.toLowerCase()) ? tag.classList.add('filter__btn--active') : tag.classList.remove('filter__btn--active')
  })
}

export const createAndRenderRangeSlider = (idSlider, idInputMin, idInputMax, min, max, current) => {
  const slider = document.getElementById(idSlider);
  
  noUiSlider.create(slider, {
    start: current,
    connect: true,
    step: 1,
    range: {
      'min': [min],
      'max': [max]
    }
  });

  // slider.noUiSlider.set([min, max])

  const input0 = document.getElementById(idInputMin);
  const input1 = document.getElementById(idInputMax);
  const inputs = [input0, input1]

  slider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle])


  })


  const setRangeSlider = (i, value) => {
    let arr = [null, null]
    arr[i] = value

    slider.noUiSlider.set(arr)
  }

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value)
    })
  })

  return slider

}

// ============= SEARCH =============

export const getSearchResults = (dataFromStore) => {
  const inputValue = DOM.search.input.value
  const searchResult = dataFromStore.filter(article => article.title.toLowerCase().includes(inputValue.toLowerCase()))
  return searchResult
}

// ============= SORT =============

export const sortArticles = (articles) => {
  const value = localStorage.sortValue ? localStorage.getItem('sortValue') : 'by-name-up'
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

// ============= FILTER BY VALUE =============

export const getActiveFiltersOptions = (e, filtersActive) => {
  const filterOptions = new Set(filtersActive)

  if (e.target.className.includes('filter__btn')) {
    const tag = e.target
    filterOptions.has(tag.innerText.toLowerCase()) ?
      filterOptions.delete(tag.innerText.toLowerCase()) :
      filterOptions.add(tag.innerText.toLowerCase())
  }
  return filterOptions
}

export const filterArticles = (articles, filtersActive) => {
  const filterOptions = new Set(filtersActive)

  const filteredArticles = []
  articles.forEach(article => {
    for (let key in article) {
      filterOptions.has(article[key].toLowerCase()) && filteredArticles.push(article)
    }
  })

  return filteredArticles
}

// ============= FILTER BY RANGE =============

export const filterByRange = (articles, filtersActive) => {
  const { year, rating } = { ...filtersActive }

  const filteredArticles = []
  articles.forEach(article => {
    const isYearFit = article.year >= year[0] && article.year <= year[1]
    const isRatingFit = article.rating >= rating[0] && article.rating <= rating[1]
    isYearFit && isRatingFit && filteredArticles.push(article)
  })
  return filteredArticles
}

export const yearRangeSlider = createAndRenderRangeSlider('range-slider-year', 'input-year-0', 'input-year-1', 1990, 2022, store.rangeFilters.year)
export const rateRangeSlider = createAndRenderRangeSlider('range-slider-rating', 'input-rating-0', 'input-rating-1', 0, 10, store.rangeFilters.rating)


// ============= FILTER POPULAR =============

export const filterByPopular = (articles, isPopular) => {
  const filteredArticles = []

  if (isPopular === 'true') {
    articles.forEach(article => {
      if (article.isPopular === 'true') filteredArticles.push(article)
    })
  }
  return filteredArticles
}

//============= LOCAL STORAGE =============



init()
