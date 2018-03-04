import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];


// create reducer var
const reducer =   combineReducers({
  ...reducers,
  router: routerReducer
})

// create composeEnhancer function with reduxtool and compose function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store by passing reducer and composing and passing middleware
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
  ));

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
    
//   }),
//   compose(applyMiddleware(...middlewares))
// );
sagaMiddleware.run(rootSaga);
export { store, history };
