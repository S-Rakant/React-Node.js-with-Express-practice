import React, { useState } from 'react'
import classes from './Search.module.css'

const Search = ({placeName, setPlaceName}) => {
    const [inputText, setInputText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlaceName(inputText);
        setInputText('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classes.searchVar}>
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                    <button>検索</button>
                </div>
            </form>
        </div>
    )
}

export default Search