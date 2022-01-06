import React from 'react'
export let FavoriteContext = React.createContext({
    favorites: [],
    totalFav: 0, addFav: (meetupitem) => { }, removeFav: (id) => { }, isFav: (id) => { }
})


import React,{useState} from 'react'


export const FavoriteContextProvider = () => {

let[userFavorites,setUserFav]= useState([])
const addFavHandler=(meetupitem)=>{
    setUserFav((prevFav)=>{
        return prevFav.concat(meetupitem)
    })
}
const removeFavHandler=(id)=>{
    setUserFav((preFav)=>{
        return preFav.filter((meetup)=>meetup.id!=id)
    })
}
const isFavHandler=(id)=>{
 return   userFavorites.some((meetup)=>meetup.id===id)

}
const context={
    favorites:userFavorites,
    totalFav:userFavorites.length,
    addFav:addFavHandler,
    removeFav:removeFavHandler,
    isFav:isFavHandler
}

    return (
        <div>
            <FavoriteContext.Provider value={ context}>
                {props.children}
            </FavoriteContext.Provider>
        </div>
    )
}



