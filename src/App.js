import './App.css';
import Main from './components/Main';

import AppState from './context/App/State'

const App = () => {
  return (
      <>
        <AppState>
            <Main/>
        </AppState>
      </>
  );
}

export default App;
