// redux - отдельный модуль, для управления состоянием приложения
// В краце это глобальный стейт приложения
// redux toolkit - вспомогательный модуль для работы с redux
// благодаря redux мы можем лучше контролировать рендер компонентов
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// как и у useState у redux есть initialState или первоначальные значения - это обычный объект
const initialState = {
    hourValue: 1,
    currentPrice: 0,
    selectedCountry: {
        key: 'ee', title: 'Eesti',
    },
    bestTimeRange: {
        from: 0,
        until: 0,
        timestamp: null,
        bestPrice: 0,
    },
    worstTimeRange: {
        from: 0,
        until: 0,
        worstPrice: 0,
    }
};

// createAction - это объявление события, которое мы будем использовать для смены redux состояния/state
// похоже на setState реакта
export const setHourValue = createAction("setHourValue");
export const setCurrentPrice = createAction("setCurrentPrice");
export const setSelectedCountry = createAction("setSelectedCountry");
export const setBestTimeRange = createAction("setBestTimeRange");
export const setWorstTimeRange = createAction("setWorstTimeRange");

// reducer(редуктор) - функция, которая используется для вычисления/изменения состояния, на основе предыдущего initialState и применяемого действия (action)
const reducer = createReducer(initialState, {
    [setHourValue]: (state, action) => {
        state.hourValue = action.payload;
    },
    [setCurrentPrice]: (state, action) => {
        state.currentPrice = action.payload;
    },
    [setSelectedCountry]: (state, action) => {
        state.selectedCountry = action.payload;
    },
    [setBestTimeRange]: (state, action) => {
        state.bestTimeRange = action.payload;
    },
    [setWorstTimeRange]: (state, action) => {
        state.worstTimeRange = action.payload;
    },
});

// Store - storage - хранилище в котором хранится вся наша информация об глобальном состоянии
export const store = configureStore({ reducer });