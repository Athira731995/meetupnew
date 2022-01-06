import React,{useContext} from 'react'
import {FavoriteContext} from './store/FavoriteContext'
import {MeetupList } from '../components/meetup/MeetupList'
export const Favorites = () => {
   let context= useContext(FavoriteContext)
    return (
        <div>
            <h1>Favorite Meetup</h1>
            <MeetupList meetup={context.favorites}/>
        </div>
    )
}
