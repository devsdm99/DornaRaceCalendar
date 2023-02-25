import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Avatar, Box, Grow } from '@mui/material';
import { EventRace } from '../../interfaces/eventRace';
import { Link as RouterLink } from 'react-router-dom';
import { setSelectedEvent } from '../../redux/eventRace';
import { useCustomDispatch } from '../../hooks/redux';
import styles from '../../App.module.css';


export type RaceProps = {
    race : EventRace;
}

const EventRaceCard = ({race}: RaceProps) => {

    const dispatch = useCustomDispatch();
    const handleSelectedRace = () => {
        dispatch(setSelectedEvent(race));
    }


    return (
        <Grow in={true} style={{ transformOrigin: '0 10 0' }} timeout={1000}>
            <Card className={`${styles.cardStyle} h-full`} raised={true}>
                <CardActionArea sx={{ height: '100%' }} component={RouterLink} to={'/race-details'} onClick={handleSelectedRace}>
                    <CardContent >
                        <Box className='flex justify-center items-center' m={1}>
                            <Avatar sx={{ width: 60, height: 60 }} src={`https://dornacorporatestorage.blob.core.windows.net/public-assets/images/events/${race.code}/flag.png`}></Avatar>
                            <Box className="text-center" m={2} sx={{
                                display: 'flex',
                                alignItems: 'flex-center',
                                flexDirection: 'column'
                            }}>
                                <span className='font-bold text-xl'>
                                    {race.code}
                                </span>

                                <span className='font-bold text-lg'>
                                    {moment(race.schedule.localTime.dateOfStart).format("DD-MMM")}
                                </span>
                            </Box>
                        </Box>
                        <span className='font-bold sm:text-2xl md:text-lg lg:text-xl'>
                            {race.sequence} - {race.circuit.name}
                        </span>
                        <div className='flex justify-center'>
                            <CardMedia
                                className='w-80 h-80 md:h-56 sm:h-48'                              
                                image={`https://dornacorporatestorage.blob.core.windows.net/public-assets/images/events/${race.code}/circuit.png`}
                                title={`${race.circuit.name}`}
                            />
                        </div>
                    </CardContent>
                </CardActionArea>

            </Card>
        </Grow>

    );

}
export default EventRaceCard;
