import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigations.css'

export const MainNavigations = () => {
    return (
        <div>
            <header>
                <h2>Meetup</h2>
                <ul>
                    <li><Link to="/">AllMeetups</Link></li>
                    <li><Link to="/add">New Meetup</Link></li>
                    <li><Link to="/favorite">Favorites</Link></li>

                </ul>
            </header>
        </div>
    )
}
