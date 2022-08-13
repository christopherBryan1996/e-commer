import {Route,Routes} from 'react-router-dom'
import AllContent from './components/allContent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='e-commer/' element={<AllContent />} />
      </Routes>
    </div>
  );
}

export default App;
