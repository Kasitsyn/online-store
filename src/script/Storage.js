import { generateArticles } from './Article.js';

export const storageData = [
    {
        id: '0',
        urlToImg: './assets/img/games-img/max-payne.jpg',
        title: 'Max Payne',
        genre: 'action',
        company: 'remedy entertainment',
        platform: 'pc',
        year: '2001',
        rating: '7',
        isPopular: 'false',
    },
    {
        id: '1',
        urlToImg: './assets/img/games-img/hitman-47.jpg',
        title: 'Hitman: Codename 47',
        genre: 'action',
        company: 'Io Interactive',
        platform: 'pc',
        year: '2000',
        rating: '5',
        isPopular: 'false',
    },
    {
        id: '2',
        urlToImg: './assets/img/games-img/warcraft-frozen.jpg',
        title: 'WARCRAFT III: THE FROZEN THRONE',
        genre: 'strategy',
        company: 'remedy entertainment',
        platform: 'pc',
        year: '2003',
        rating: '9',
        isPopular: 'true',
    },
    {
        id: '3',
        urlToImg: './assets/img/games-img/HL2.jpg',
        title: 'Half Life 2',
        genre: 'action',
        company: 'valve',
        platform: 'pc',
        year: '2004',
        rating: '9',
        isPopular: 'true',
    },
    {
        id: '4',
        urlToImg: './assets/img/games-img/mafia.jpg',
        title: 'Mafia: The City of Lost Heaven',
        genre: 'action',
        company: 'Illusion Softworks',
        platform: 'xbox',
        year: '2002',
        rating: '7',
        isPopular: 'false',
    },
    {
        id: '5',
        urlToImg: './assets/img/games-img/last-of-us.jpg',
        title: 'The Last of Us',
        genre: 'action',
        company: 'Naughty Dog Software',
        platform: 'playStation',
        year: '2013',
        rating: '9',
        isPopular: 'true',
    },
    {
        id: '6',
        urlToImg: './assets/img/games-img/assassins-creed.jpg',
        title: "Assassin's Creed",
        genre: 'action',
        company: 'Rockstar Games',
        platform: 'playstation',
        year: '2007',
        rating: '5',
        isPopular: 'false',
    },
    {
        id: '7',
        urlToImg: './assets/img/games-img/watch-dogs.jpg',
        title: 'Watch Dogs',
        genre: 'action',
        company: 'Ubisoft',
        platform: 'xbox',
        year: '2014',
        rating: '6',
        isPopular: 'false',
    },
    {
        id: '8',
        urlToImg: './assets/img/games-img/far-cry5.jpg',
        title: 'Far Cry 5',
        genre: 'action',
        company: 'Ubisoft',
        platform: 'xbox',
        year: '2018',
        rating: '4',
        isPopular: 'false',
    },
    {
        id: '9',
        urlToImg: './assets/img/games-img/fallout3.jpg',
        title: 'Fallout 3',
        genre: 'RPG',
        company: 'Bethesda',
        platform: 'playstation',
        year: '2008',
        rating: '6',
        isPopular: 'false',
    },
];

//============= STORE =============

export let store = {
    articles: [],

    createArticles(data) {
        this.articles = generateArticles(data);
    },

    storeArticles(data) {
        this.articles = [...data];
    },

    filtersActive: localStorage.filtersActive ? new Set(JSON.parse(localStorage.getItem('filtersActive'))) : new Set(),

    storeFiltersActive(filterOptions) {
        this.filtersActive = new Set(filterOptions);
        localStorage.setItem('filtersActive', JSON.stringify([...this.filtersActive]));
    },

    rangeFilters: localStorage.rangeFilters
        ? JSON.parse(localStorage.getItem('rangeFilters'))
        : { year: [1990, 2022], rating: [0, 10] },

    storeRangeFilters(rangeFilters, option) {
        this.rangeFilters = { ...this.rangeFilters, [option]: [...rangeFilters] };
        localStorage.setItem('rangeFilters', JSON.stringify(this.rangeFilters));
    },

    isPopular: localStorage.rangeFilters ? localStorage.getItem('isPopular') : 'false',
    togglePopularFilters(value) {
        this.isPopular = value;
        localStorage.setItem('isPopular', this.isPopular);
    },

    cartValue: 0,
};

// store.filtersActive =
// localStorage.rangeFilters && JSON.parse(localStorage.getItem('rangeFilters'))
// localStorage.isPopular && localStorage.getItem('filtersActive')
