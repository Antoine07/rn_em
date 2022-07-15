
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/index';
import Home from './components/Home';
import middlewareHistory from './store/middlewares/history';

const store = createStore(rootReducer, applyMiddleware(middlewareHistory));

export default function App() {
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
}
