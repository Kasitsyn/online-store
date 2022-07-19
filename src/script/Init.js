//============= INIT =============

import { addFilterTagsHandler, addRangeFilterHandler, addSearchFormHandler, addSearchInputHandler, addSearchSubmitHandler, addSortSelectHandler } from "./Handlers.js"
import { renderArticles, createAndRenderRangeSlider, sortArticles } from "./index.js"
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

  store.createArticles(storageData)
  store.storeArticles(sortArticles(store.articles))
  renderArticles(store.articles)
  
}