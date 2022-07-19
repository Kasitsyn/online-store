import { generateArticles } from "./Article.js"

export const storageData = [
  {
    id: '0',
    urlToImg: '../../src/assets/img/games-img/max-payne.jpg',
    title: 'Max Payne',
    genre: 'action',
    company: 'remedy entertainment',
    platform: 'pc',
    year: '2001',
    rating: '9',
  },
  {
    id: '1',
    urlToImg: '../../src/assets/img/games-img/hitman-47.jpg',
    title: 'Hitman: Codename 47',
    genre: 'action',
    company: 'Io Interactive',
    platform: 'pc',
    year: '2000',
    rating: '7',
  },
  {
    id: '2',
    urlToImg: '../../src/assets/img/games-img/warcraft-frozen.jpg',
    title: 'WARCRAFT III: THE FROZEN THRONE',
    genre: 'strategy',
    company: 'remedy entertainment',
    platform: 'pc',
    year: '2003',
    rating: '9',
  },
  {
    id: '3',
    urlToImg: '../../src/assets/img/games-img/HL2.jpg',
    title: 'Half Life 2',
    genre: 'action',
    company: 'valve',
    platform: 'pc',
    year: '2004',
    rating: '9',
  },
  {
    id: '4',
    urlToImg: '../../src/assets/img/games-img/mafia.jpg',
    title: 'Mafia: The City of Lost Heaven',
    genre: 'action',
    company: 'Illusion Softworks',
    platform: 'pc',
    year: '2002',
    rating: '9',
  },

]

//============= STORE =============

export const store = {
  articles: [],

  createArticles(data) {
    this.articles = generateArticles(data)
  },

  storeArticles(data) {
    this.articles = [...data]
  },

  filtersActive: new Set(),

  storeFiltersActive(filterOptions) {
    this.filtersActive = new Set(filterOptions)
  },

  rangeFilters: {
    year: [1990, 2022],
    rating: [0, 10]
  },
  
storeRangeFilters(rangeFilters, option) {
  this.rangeFilters = {...this.rangeFilters, [option]: [...rangeFilters]}
},

}