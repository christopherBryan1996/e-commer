import {Route,Routes} from 'react-router-dom'
import AllContent from './components/allContent';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { get_gamers } from './actions';
import Login from './components/login';

function App() {
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(get_gamers())
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='e-commer/' element={<AllContent />} />
        <Route path='e-commer/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
