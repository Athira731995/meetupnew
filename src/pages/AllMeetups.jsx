import React from 'react'

import { MeetupList } from '../components/meetup/MeetupList';

export const AllMeetups = ({meetups}) => {

    
    return (

        <div>
            <h1>All Meetups</h1>
            <MeetupList  meetups={meetups}/>
        </div>


    )
}
