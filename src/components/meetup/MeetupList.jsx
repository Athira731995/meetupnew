import React from 'react'
import { MeetupItem } from './MeetupItem'

export const MeetupList = ({ meetups }) => {
    return (
        <div>
            {
                meetups.map(meetup => <MeetupItem meetup={meetup}   />)
            }
        </div>
    )
}
