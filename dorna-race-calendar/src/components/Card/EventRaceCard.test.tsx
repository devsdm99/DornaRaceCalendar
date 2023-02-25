import React from 'react';
import { render,screen } from '@testing-library/react';
import EventRaceCard from './EventRaceCard';
import { EventRace } from '../../interfaces/eventRace';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('EventRaceCard Component', () => {
  test('Renders the name of the race', () => {
    const text = "1 - Algarve International Circuit";
    const defaultProps: EventRace  = {
        id: "6002b0fa4ea5d4488ca9f3fe",
        sequence: 1,
        code: "POR",
        shortName: "GRAN PRÉMIO DE PORTUGAL",
        sponsoredName: "Grande Prémio de Portugal",
        circuit: {
            id: "5f6201915af11a07a9372777",
            name: "Algarve International Circuit",
            location: "Portugal"
        },
        schedule: {
            localTime: {
                dateOfStart: "03/19/2023 12:00:00",
                dateOfEnd: "03/26/2023 15:45:00"
            }
        }     
    }
    render(<Provider store={store}>
        <EventRaceCard race={defaultProps} />
    </Provider>, {wrapper: MemoryRouter})
    const circuitName = screen.getByText(text);
    expect(circuitName).toBeInTheDocument();
  })
});