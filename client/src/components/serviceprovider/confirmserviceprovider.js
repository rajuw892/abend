import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
 


const ConfirmService = () => {

    const dispatch = useDispatch()
    

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData


   

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch((userData))
    }

    return (
                

        <div className="auth_page">
            <form onSubmit={handleSubmit}>
            <input list="browsers" name="browser" />
            <datalist id="browsers">
                <option value="Yes" />
                <option value="No" />
              
            </datalist>
            <input type="submit" />
                

            
                 

                
            </form>
        </div>
    )
}

export default ConfirmService
