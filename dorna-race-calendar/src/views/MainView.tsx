import React, { useEffect } from 'react';

import Header from '../components/Header/Header';
import calendarInfoJson from '../assets/calendar.json';
import { useCustomDispatch } from '../hooks/redux';
import { setCalendarInfo } from '../redux/calendarEvent';
import RaceCalendar from './RaceCalendar';
const MainView = () => {

    const dispatch = useCustomDispatch();

    useEffect(() => {    
        dispatch(setCalendarInfo(calendarInfoJson));
    },)
    
    return(
        <>
           <Header/>
           <RaceCalendar/>
        </>
    );

}


export default MainView;