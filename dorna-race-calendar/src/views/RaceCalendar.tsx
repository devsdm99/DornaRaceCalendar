
import { useCustomSelector } from '../hooks/redux';
import EventRaceCard from '../components/Card/EventRaceCard';
import Grid from '@mui/material/Grid'; 

const RaceCalendar = () => {
  
    const {calendarInfo} = useCustomSelector((state) => state);
    return(
        <div className='m-10'>
            <Grid container spacing={3}>
                {calendarInfo.information?.events.map((eventRace,i) => 
                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <EventRaceCard race={eventRace}/>
                </Grid>
                )}
            </Grid>

        </div>
    );

}


export default RaceCalendar;