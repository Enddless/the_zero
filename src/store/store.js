import { createStore } from 'redux';
import reducer from "./reducer";

// Основные методы для работы со store

// store.dispatch() — диспатч какого-либо экшена
// store.getState() — получение данных, которые хранятся в store
// store.subscribe() — подписка на изменения store.

const store = createStore(reducer);
export default store;