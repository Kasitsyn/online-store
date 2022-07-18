//============= INIT =============

import { addSearchFormHandler, addSearchInputHandler, addSearchSubmitHandler, addSortSelectHandler } from "./Handlers.js"
import { renderArticles, sortByName } from "./index.js"
import { storageData, store } from "./Storage.js"
import { DOM } from "./UI.js"

export const init = () => {

  DOM.search.input.focus()

  addSearchInputHandler()
  addSearchSubmitHandler()
  addSearchFormHandler()
  addSortSelectHandler()

  store.createArticles(storageData)
  renderArticles(store.articles)

}