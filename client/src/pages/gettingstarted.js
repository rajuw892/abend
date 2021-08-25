import React from 'react'
import {  useSelector } from 'react-redux'
import GymForm from '../components/GymForm/GymForm/GymForm'
import FirstGymform from '../components/GymForm/firstgymform'
import GymProfile from '../components/profile/gymprofile'

const Gettingstarted = () => {

    const { auth } = useSelector(state => state)

    return (
        <div>
              
                 
                   <GymProfile />
                 
              
               
              
               
            
        </div>
    )
}

export default Gettingstarted
