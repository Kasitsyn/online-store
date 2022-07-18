//============= DOM ELEMENTS =============

export const DOM = {
  search: {
    input: document.querySelector('.filter-search__input'),
    submitBtn: document.querySelector('.filter-search__submit'),
    form: document.querySelector('.search-form')
  },
  sort: {
    select: document.querySelector('.filter-sort__select'),
  },
  filters: {
    filtersByValue: document.querySelector('.filters-by-value'),
    tags: document.querySelectorAll('.filter .filter__btn')
  },
  games: {
    wrapperGames: document.querySelector('.wrapper-games'),
  },
}