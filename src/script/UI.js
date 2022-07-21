//============= DOM ELEMENTS =============

export const DOM = {
  cart: {
    cartValue: document.querySelector('.cart__value')
  },
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
    tags: document.querySelectorAll('.filter .filter__btn'),
    rangeInputs: document.querySelectorAll('.filter__input'),
    rangeForms: document.querySelectorAll('.filter__form'),
    popularCheckbox: document.querySelector('.filters__checkbox'),
    resetBtn: document.querySelector('.filter__reset-btn'),
    hardResetBtn: document.querySelector('.filter__reset-btn--settings'),
    

  },
  games: {
    wrapperGames: document.querySelector('.wrapper-games'),
    gameCards: document.querySelectorAll('.game-card')
  },
}