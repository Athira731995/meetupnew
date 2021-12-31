import React from 'react'
import { MeetupForm } from '../components/meetup/MeetupForm'
MeetupForm

export const NewMeetup = ({addMeetup}) => {
    return (
        <div>
            <h1>New Meetups</h1>
            <MeetupForm  addMeetup={addMeetup}/>
        </div>
    )
}
