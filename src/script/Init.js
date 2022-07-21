//============= INIT =============

import { addFilterHardResetBtnHandler, addFilterPopularHandler, addFilterResetBtnHandler, addFilterTagsHandler, addGameCardHandler, addRangeFilterHandler, addSearchFormHandler, addSearchInputHandler, addSearchSubmitHandler, addSortSelectHandler } from "./Handlers.js"
import { renderArticles, createAndRenderRangeSlider, sortArticles, renderFilters } from "./index.js"
import { storageData, store } from "./Storage.js"
import { DOM } from "./UI.js"



export const init = () => {


  // alert(' Привет, друг. Проверь работу, пожалуйтса, в последний день, еще очень много доделать надо. Буду очень признателен. Мой дискорд: Yura#5680, Спасибо :)')

  DOM.search.input.focus()


  addSearchInputHandler()
  addSearchSubmitHandler()
  addSearchFormHandler()
  addSortSelectHandler()
  addFilterTagsHandler()
  addRangeFilterHandler()
  addFilterPopularHandler()
  addFilterResetBtnHandler()
  addFilterHardResetBtnHandler()
  addGameCardHandler()

  if (localStorage.sortValue) {
    const option = localStorage.getItem('sortValue')
    const elem = document.querySelector(`option[value="${option}"]`)
    elem.setAttribute('selected', 'selected')
  }


  store.createArticles(storageData)
  store.storeArticles(sortArticles(store.articles))
  renderArticles(store.articles)
  renderFilters(store.filtersActive)

}