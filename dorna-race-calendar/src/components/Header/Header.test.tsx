import { render,screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import '@testing-library/jest-dom';

describe('Header Component', () => {

    test('Renders Motogp calendar 2023', () => {
      render( <Provider store={store}> 
      <Header/> 
      </Provider>);
      const title = screen.getByText("RACE CALENDAR");
      expect(title).toBeInTheDocument();
    })
  });