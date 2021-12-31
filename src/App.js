import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom'
import { AllMeetups } from './pages/AllMeetups';
import { Favorites } from './pages/Favorites';
import { NewMeetup } from './pages/NewMeetup';

function App() {

  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
 let [meetups,setMeetups]= useState(DUMMY_DATA)
 const addMeetup=(meetup)=>{
   let newmeetups=meetups
 newmeetups.push(meetup)
 //console.log(meetups.push(meetup));
 // meetups.push(meetup)
 setMeetups(newmeetups)
}
 
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups meetups={meetups}  />} >
        </Route>
        <Route path="/add" element={<NewMeetup addMeetup={addMeetup} />}>
        </Route>
        <Route path="favorite" element={<Favorites />}>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;