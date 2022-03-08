// External Dependencies
import { CssBaseline } from '@material-ui/core';

// Internal Dependencies
import Header from './Header';
import PupperContent from './PupperContent';
import './App.css';

// Component Definition
function App() {
  return (
    <>
      <CssBaseline />

      <div className="App">
        <Header />

        <PupperContent />
      </div>
    </>
  );
}

export default App;
