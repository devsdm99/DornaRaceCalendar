import logo from '../../assets/motogplogo.png';
import { useCustomSelector } from '../../hooks/redux';
import styles from '../../App.module.css';

const Header = () => {  
    const {calendarInfo} = useCustomSelector((state) => state);
    return(
        <nav>
            <div className="flex justify-center items-center  mt-10 min-w-max" >
                <div >
                    <img src={logo} className="w-24 sm:w-32 lg:w-44" alt="logo" />
                </div>                
                <span className={`text-2xl sm:text-3xl lg:text-7xl text-center md:ml-5 ${styles.motoGpFont}`} style={{ color:'white'}}>RACE CALENDAR {calendarInfo.information?.season}</span>
            </div>
        </nav>
    );

}
export default Header;