import React, { useState } from 'react'
import Button from '../button'
import './styles.scss'

const Search = ( { onSearchChange }) => {
    const [location, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        onSearchChange(location)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="searchform">
                <input
                    aria-label="location"
                    type="text"
                    className={`form-control`}
                    placeholder="Search for location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                 <Button type="submit" label="Search" /> 
            </form>
        </div>
    )
}

export default Search