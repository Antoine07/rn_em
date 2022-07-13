
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/index';
import Home from './components/Home';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
}
