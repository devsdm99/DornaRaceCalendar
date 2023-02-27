
import { useCustomDispatch, useCustomSelector } from '../hooks/redux';
import EventRaceCard from '../components/Card/EventRaceCard';
import Grid from '@mui/material/Grid'; 
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../App.module.css';
import { useEffect, useState } from 'react';
import { setFilteredCalendar } from '../redux/calendarEvent';

const RaceCalendar = () => {
    
    const dispatch = useCustomDispatch();
    const {calendarInfo} = useCustomSelector((state) => state);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    const handleInputChanged = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        if(searchTerm){
            let filtered = calendarInfo.information?.events.filter((x) => x.circuit.name.toLowerCase().includes(searchTerm.toLowerCase())) || null;
            dispatch(setFilteredCalendar(filtered))
        }else{
            dispatch(setFilteredCalendar(calendarInfo.information?.events || null))
        }     
    },[searchTerm, calendarInfo.information, dispatch]);

   

    return(
        <div className='m-10'>
            <TextField
            fullWidth
                id="outlined-required"
                label="Race Name"
                variant='filled'
                className={`${styles.customTextField} p-2` }
                onChange={handleInputChanged}
                InputProps={{
                    
                    startAdornment: <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>,
                  }} 
            />
            <Grid container spacing={3} marginTop={1}>
                {calendarInfo.filteredRaces?.map((eventRace,i) => 
                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <EventRaceCard race={eventRace}/>
                </Grid>
                )}
            </Grid>

        </div>
    );

}


export default RaceCalendar;