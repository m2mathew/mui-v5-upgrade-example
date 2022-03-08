// External Dependencies
import { CssBaseline } from '@material-ui/core';

// Internal Dependencies
import Header from './pages/Header';
import './App.css';

// Component Definition
function App() {
  return (
    <>
      <CssBaseline />

      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
