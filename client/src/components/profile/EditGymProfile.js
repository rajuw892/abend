import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import ImageIcon from '@material-ui/icons/Image';
import {Button} from '@material-ui/core';
import { updateGym } from '../../redux/actions/gymAction'
import './EditGymProfile.css'
import Styles from '../GymForm/GymForm/GymForm.module.css';
const EditGymProfile = ({setOnEdit}) => {

    const initialState = { 
        gymname: '', yearsofexperience: '', mobile: '', gender: '', location: '', openingtime: '', closingtime: '', about: '', subscriptionprice: '',
        descriptionofservice: '', informationaboutgym: ''
    }

    const [gymData, setGymData] = useState(initialState)
    const [images, setImages] = useState([])

    const {gymname, yearsofexperience, mobile, gender, location, openingtime, closingtime, about,
        subscriptionprice, descriptionofservice, informationaboutgym
    } = gymData

    const dispatch = useDispatch()
    const { auth } = useSelector(state => state)

    

    useEffect(() => {
        setGymData(auth.user)
    }, [auth.user])

    const handleChangeImages = e => {
        const files = [...e.target.files]
        let err = ""
        let newImages = []

        files.forEach(file => {
            if(!file) return err = "File does not exist."

            if(file.size > 1024 * 1024 * 5){
                return err = "The image largest is 5mb."
            }

            return newImages.push(file)
        })

        if(err) dispatch({ type: GLOBALTYPES.ALERT, payload: {error: err} })
        setImages([...images, ...newImages])
    }


    const deleteImages = (index) => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }


   
    const handleInput = e => {
        const {name, value } = e.target
        setGymData({ ...gymData, [name]:value })

    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateGym({gymData, images, auth}))
    }
 
 

    return (
        <div className="edit_profile">
        <button className="btn btn-danger btn_close"
            onClick={() => setOnEdit(false)}>
                Close
            </button>
            <div className={Styles.formSection}>
            <div className={Styles.left}>
                {/*form section*/} 
                <h1 className={Styles.formHeading} style={{marginTop: '10%'}}>Update your details</h1>
                
                {/*form*/}
                <form onSubmit={handleSubmit} className={Styles.form} style={{background: 'white'}}>
                    
                    
                    <input className={Styles.input} type="text"  name="gymname" value={gymname}   onChange={handleInput}  placeholder="Gym Name"/>
                    <input className={Styles.input} type="number" name="yearsofexperience"  value={yearsofexperience}  onChange={handleInput}  placeholder="Years of Experience" />
                    <input className={Styles.input} type="number"  name="mobile"  value={mobile}  onChange={handleInput}  placeholder="Contact Number" />
                    <input className={Styles.input} type="text"  name="about"  value={about}  onChange={handleInput}  placeholder="about"/>
                    <select name="gender" value={gender} onChange={handleInput}  className={Styles.selection}>
                         <option   selected className={Styles.options}>Select the gender you allow</option>
                         <option  className={Styles.options}>Male</option>
                         <option  className={Styles.options}>Female</option>
                         <option  className={Styles.options}>Both</option>
                     </select>
                     <h3 className={Styles.inputHeading}>Select the Opening Time</h3>
                     <input className={Styles.input}  name="openingtime"  value={openingtime}  onChange={handleInput} type="time" placeholder="Select the Opening Time"/>
                     <h3 className={Styles.inputHeading}>Select the Closing Time</h3>
                     <input className={Styles.input}   name="closingtime"  value={closingtime}  onChange={handleInput}  type="time" placeholder="Select the Closing Time"/>
                    <input className={Styles.input} name="subscriptionprice" value={subscriptionprice}  onChange={handleInput}  type="number" placeholder="Enter Subscription Price ( per head in Rs )"/>
                    <input className={Styles.input}  name="descriptionofservice"   value={descriptionofservice} onChange={handleInput}  type="text" placeholder="Description about services you are providing"/>
                    <input className={Styles.input} name="informationaboutgym"  value={informationaboutgym}   onChange={handleInput} type="number" placeholder="Enter the information (especially about GYM)"/>

                     


                    <h3 className={Styles.inputHeading}>Add Your Gym Image</h3>

                    <div className={Styles.showimages}>
                    {
                        images.map((img, index) => (
                            <div className={Styles.file_img} key={index} id="file_img">

                            <img className={Styles.showimg} src={
                                img.url ? img.url : URL.createObjectURL(img)
                                }
                             alt="images" className="img-thumbnail"/>

                             <span  onClick={() => deleteImages(index)} className={Styles.closeimage}>
                                 &times;
                             </span>

                            </div>

                        ))
                    }

                    

                    </div>
                    
                    <div className="input_images">
                                          
                        <div className="file_upload">
                              <ImageIcon style={{height: '40px', width: '40px', cursor: 'pointer'}}/>
                             <input type="file" name="file" id="file"
                            multiple accept="image/*" onChange={handleChangeImages} />
                        </div>
                            
                        
                        
                    </div>



                     
                    <button className="btn btn-dark w-100" type="submit">Confirm</button>
                     
                </form>

                
           </div>

           
           
        </div>
        </div>
    )
}

export default EditGymProfile
