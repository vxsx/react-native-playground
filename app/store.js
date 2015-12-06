import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { localStorageMiddleware#<{(| , rehydrateStateFromLocalStorage |)}># } from './middlewares';
import rootReducer from './reducers';

const middleWares = [thunk/* , localStorageMiddleware */];
const createStoreWithMiddleware = applyMiddleware(
    ...middleWares
)(createStore);

/**
 * Creates the store.
 *
 * @function configureStore
 * @param {Object} initialState initial state of the store
 * @returns {Store} store
 */
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, /* rehydrateStateFromLocalStorage( */ initialState/* ) */);

    return store;
}
