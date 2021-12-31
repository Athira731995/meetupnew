import React from 'react'
import { Card } from '../ui/Card'
import './MeetupItem.css'
export const MeetupItem = ({meetup}) => {
    return (
        <div>
            <Card>
            <h2 className='content'>{meetup.title}</h2>
            <img src={meetup.image} alt="" />
            <p className='para'>{meetup.address}</p>
            <p className='para'>{meetup.description}</p>
            <button className='btn'>Favorites</button>
            </Card>         
        </div>
    )
}
