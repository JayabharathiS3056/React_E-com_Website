import './App.css';
import Router from './routes';
//Importing bootstrap for css
import 'bootstrap/dist/css/bootstrap.min.css'
// import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
<Router/>
    </div>
    </Provider>
  );
}

export default App;







/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      
      logoimport logo from './logo.svg';*/