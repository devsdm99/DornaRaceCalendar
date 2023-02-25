import { Provider } from 'react-redux';
import store  from './redux/store';
import MainView from './views/MainView';
import { Routes, Route } from 'react-router-dom';
import RaceDetail from './views/RaceDetail';

function App() {
  
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainView/>}/>
        <Route path='/race-details' element={<RaceDetail/>}/>
      </Routes>
    </Provider>
    
  );
}

export default App;
