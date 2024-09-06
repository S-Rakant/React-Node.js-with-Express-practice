import React, { useEffect, useState } from 'react'
import classes from './Wheather.module.css'
import { Place } from '../Place/Place';
import { MaxTemp } from '../MaxTemp/MaxTemp';
import { MinTemp } from '../MinTemp/MinTemp';
import { Humidity } from '../Humidity/Humidity';

const Wheather = ({placeName, setPlaceName}) => {
    const [info, setInfo] = useState();

    useEffect(() => {
        const fetchWheather = async () => {
            const fetchData = await fetch(`http://localhost:5000/api/getWheatherInfo/${placeName}`);
            const body = await fetchData.json();
            setInfo(body[0]);
        }
        fetchWheather();
    }, [placeName]);
    
    useEffect(() => {
        console.log('infoが更新されました', info);
    }, [info]);
    return (
        <div className={classes.container}>
            <div className={classes.square}>
                <ul>
                    <Place place={info ? info.name : ''}/>
                    <MaxTemp maxTemp={info ? info.maxTemp : ''}/>
                    <MinTemp minTemp={info ? info.minTemp : ''}/>
                    <Humidity humidity={info  ? info.humidity : ''}/>
                </ul>
            </div>
        </div>
    )
}

export default Wheather