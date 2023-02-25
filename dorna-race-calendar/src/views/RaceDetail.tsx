import { Box, Avatar, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useCustomSelector } from '../hooks/redux';
import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from '@mui/icons-material';
import moment from 'moment';
import Zoom from '@mui/material/Zoom';
import { useEffect, useState } from 'react';
import styles from '../App.module.css';
import { dateFormatRace } from '../helpers/utils';
import CardInformation from '../components/Card/CardInformation';

const RaceDetail = () => {
    const [closeAnimation, setCloseAnimation] = useState<boolean>(true);
    const { eventRace } = useCustomSelector((state) => state);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }
    useEffect(() => {
        if (!closeAnimation) {
            handleBack();
        }
    });

    type ContentProps = {
        title: string;
        childElements: string[];
    }

    const InformationCardContent = ({ title, childElements, }: ContentProps) => {
        return (
            <>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {
                    childElements.map((item) => (
                        <Typography variant="body1" color="text.secondary">
                            {item}
                        </Typography>
                    ))
                }

            </>
        )
    }
    return (
        <Zoom in={closeAnimation} timeout={1000}>
            <div className={`${styles.cardStyle} p-10`}>
                <Button onClick={(() => setCloseAnimation(false))} variant="contained" startIcon={<ArrowBackIos />}>
                    GO BACK
                </Button>
                <Box className="text-center" m={2} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Avatar sx={{ width: 160, height: 160 }} src={`https://dornacorporatestorage.blob.core.windows.net/public-assets/images/events/${eventRace.selectedEvent?.code}/flag.png`}></Avatar>
                    <span className={`text-2xl sm:text-3xl lg:text-7xl text-center md:ml-5 ml-10  ${styles.motoGpFont}`}>
                        {eventRace.selectedEvent?.shortName}
                    </span>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                }}>
                    <Grid container justifyContent={'center'} spacing={2} >
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CardInformation content={
                                <InformationCardContent
                                    title='Circuit Information'
                                    childElements={[
                                        `Name: ${eventRace.selectedEvent?.circuit.name}`,
                                        `Location: ${eventRace.selectedEvent?.circuit.location}`,
                                    ]} />
                            }
                                actions={
                                    <>
                                        <Button size="medium">Information</Button>
                                    </>
                                } />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CardInformation content={
                                <InformationCardContent
                                    title='Schedule'
                                    childElements={[
                                        `Start date: ${moment(eventRace.selectedEvent?.schedule.localTime.dateOfStart).format(dateFormatRace)}`,
                                        `End date: ${moment(eventRace.selectedEvent?.schedule.localTime.dateOfEnd).format(dateFormatRace)}`,
                                    ]} />
                            }
                                actions={
                                    <>
                                        <Button size="medium">Complete Schedule</Button>
                                    </>
                                } />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardInformation
                                content={
                                    <>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Circuit image
                                        </Typography>

                                        <div className='flex justify-center'>
                                            <CardMedia
                                                className='w-80 h-80 md:h-56 sm:h-48'
                                                image={`https://dornacorporatestorage.blob.core.windows.net/public-assets/images/events/${eventRace.selectedEvent?.code}/circuit.png`}
                                                title={`${eventRace.selectedEvent?.circuit.name}`}
                                            />
                                        </div>
                                    </>
                                }
                                actions={
                                    <>
                                        <Button size="medium">View more here</Button>
                                    </>
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Zoom>
    );
}


export default RaceDetail;