import './App.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AppRouter from './components/AppRouter';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
