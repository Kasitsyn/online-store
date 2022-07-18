//============= INIT =============

import { addFilterTagsHandler, addSearchFormHandler, addSearchInputHandler, addSearchSubmitHandler, addSortSelectHandler } from "./Handlers.js"
import { renderArticles, sortArticles } from "./index.js"
import { storageData, store } from "./Storage.js"
import { DOM } from "./UI.js"

export const init = () => {

  alert(' Привет, друг. Проверь работу, пожалуйтса, в последний день, еще очень много доделать надо. Буду очень признателен. Мой дискорд: Yura#5680, Спасибо :)')

  DOM.search.input.focus()

  addSearchInputHandler()
  addSearchSubmitHandler()
  addSearchFormHandler()
  addSortSelectHandler()
  addFilterTagsHandler()

  store.createArticles(storageData)
  store.storeArticles(sortArticles(store.articles))
  renderArticles(store.articles)

}