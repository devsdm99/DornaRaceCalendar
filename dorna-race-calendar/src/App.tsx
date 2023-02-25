import { Provider } from 'react-redux';
import store  from './redux/store';
import MainView from './views/MainView';
import { Routes, Route } from 'react-router-dom';
import RaceDetail from './views/RaceDetail';
import { NotFound } from './views/NotFound';

function App() {
  
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainView/>}/>
        <Route path='/race-details' element={<RaceDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Provider>
    
  );
}

export default App;
