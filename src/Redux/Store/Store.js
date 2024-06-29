// store.js
import { createStore } from 'redux';
import rootReducer from '../Reducer/UserReducer';

const store = createStore(rootReducer);

export default store;
