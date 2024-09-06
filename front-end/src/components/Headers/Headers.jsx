import React from 'react'
import classes from './Headers.module.css'

const Headers = ({placeName, setPlaceName}) => {
    return (
        <header className={classes.header}>
            <p>{placeName}の天気</p>
        </header>
    )
}

export default Headers