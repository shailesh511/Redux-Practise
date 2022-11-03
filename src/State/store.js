import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from 'redux'
// import reducers from './Reducers';
// import thunk from 'redux-thunk'
// const store = configureStore({
//     reducers:reducers
// })

// export default store;
