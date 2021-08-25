import React, { useEffect, useState} from 'react'
import UserProfile from '../../components/profile/UserProfile';
import GymProfile from '../../components/profile/gymprofile';
import Styles from '../../components/profile.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileAction'
import { useParams } from 'react-router-dom'


const Profile = () => {
    const { profile, auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const { id } = useParams()
    const [user, setUser] = useState(true);

    const ShiftUser = ()=>{
        setUser(true);
        document.getElementById("user").style.borderBottom="3px solid red";
        document.getElementById("service").style.borderBottom="none";
     }

     const ShiftService = ()=>{
         setUser(false);
         document.getElementById("user").style.borderBottom="none";
         document.getElementById("service").style.borderBottom="3px solid red";
     }
    

    useEffect(() => {
        if(profile.ids.every(item => item !== id)){
            dispatch(getProfileUsers({id, auth}))
            console.log(profile)
        }
    },[id, auth, dispatch, profile.ids])

    useEffect(()=>{
        document.getElementById("user").style.borderBottom="3px solid red";
     },[])

    return (
        <div className="prrofile">

                <div className={Styles.switchSection}>
                <p id="user" onClick={ShiftUser}>USER</p>
                <p id="service" onClick={ShiftService}>SERVICE PROVIDER</p>
                </div>
                {user? <UserProfile auth={auth} profile={profile} dispatch={dispatch} id={id} /> : <GymProfile />}
                
            

           

             
            
        </div>
    )
}

export default Profile