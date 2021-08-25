import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileUser } from '../../redux/actions/profileAction'
import Styles from '../GymForm/GymForm/GymForm.module.css';


const FirstGymform = () => {

    const initialState = {
        serviceprovider: '', typesofservice: ''
   }
   const [userData, setUserData] = useState(initialState)
   const { serviceprovider, typesofservice } = userData


   const { auth } = useSelector(state => state)
   const dispatch = useDispatch()

   useEffect(() => {
    setUserData(auth.user)
}, [auth.user])




    const handleInput = e => {
        const {name, value } = e.target
        setUserData({ ...userData, [name]:value })

    }


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData, auth}))
        
    }
    return (
        <div>
            <div className={Styles.formSection}>
            <div className={Styles.left}>
                {/*form section*/} 
                <h1 className={Styles.formHeading}>Please Enter some of your details</h1>
                
                {/*form*/}
                <form onSubmit={handleSubmit} className={Styles.form}>
                    
                     
                    <select name="serviceprovider" value={serviceprovider} onChange={handleInput}  className={Styles.selection}>
                         <option   selected className={Styles.options}>Do you want to provide service on Ambhos?</option>
                         <option  className={Styles.options}>Yes</option>
                         <option  className={Styles.options}>No</option>
                         
                     </select>


                     <select name="typesofservice" value={typesofservice} onChange={handleInput}  className={Styles.selection}>
                         <option   selected className={Styles.options}>Which service do you want to provide?</option>
                         <option  className={Styles.options}>Gym</option>
                         <option  className={Styles.options}>Gym Trainer</option>
                         <option  className={Styles.options}>Yoga Trainer</option>
                         <option  className={Styles.options}>Dance</option>
                         <option  className={Styles.options}>Karate</option>
                         <option  className={Styles.options}>Treeking</option>
                         
                     </select>

                     

            
                    

                    

                  
                    
                  


                     
                    <button className="btn btn-dark w-100" type="submit">Confirm</button>
                     
                </form>

                
                </div>

                </div>

        </div>
    )
}

export default FirstGymform
