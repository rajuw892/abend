import React, { useState, useEffect} from 'react'
import Styles from './gymprofile.module.css';
import {Avatar, IconButton, Button} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';
import EditGymProfile from './EditGymProfile'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DeleteIcon from '@material-ui/icons/Delete';

import { getDataAPI } from '../../utils/fetchData'

const GymProfile = () => {
     
    const { auth } = useSelector(state => state)
    const [gymData, setGymData] = useState([])
    const [onEdit, setOnEdit] = useState(false)
    

    useEffect(() => {
        const fetching = async () => {
          const   res   = await getDataAPI('gyms', auth.token);

          console.log(res.data.gyms)


          setGymData(res.data.gyms)
    
          
            
        };
    
    
        fetching();
    }, []);
     
     
     

    return (

        <div className={Styles.main}>
            <div className={Styles.side}>
                <div className={Styles.left}>
                     <Avatar src={`/tree.jpg`} className={Styles.avatar}/>
                </div>
                {    
                gymData.map(gyms => (
                <div className={Styles.right}>
                     <h2>{gyms.gymname}</h2>
                     <h2 className={Styles.location}><div><LocationOnIcon/>{gyms.location}</div></h2>
                     <h2>{gyms.yearsofexperience} years of Establishment</h2>
                     <Button className={Styles.button}>Delete Account <DeleteIcon /></Button>
                </div>
                  ))
                }
                 
                
            </div>

                  

            
        {/* contact and email must be hidden */}
      
        <div className={Styles.split}>
            <h2 className={Styles.leftheading}>9087580593</h2>
            <h2 className={Styles.rightHeading}>ayushofficials2609@gmail.com</h2>
        </div>
                
        
        {    
          gymData.map(gyms => (
        <div className={Styles.innerDiv}>
        <h2>About</h2>
        <p>{gyms.about}</p>
        </div>
          ))
        }
        
        {    
          gymData.map(gyms => (
        <div className={Styles.innerDiv}>
        <h2>Description about services/equipments</h2>
        <p>{gyms.descriptionofservice}</p>
        </div>
          ))
        }
         
        
        {    
          gymData.map(gyms => (
        <div className={Styles.innerDiv}>
        <h2>Extra information</h2>
        <p>{gyms.informationaboutgym}</p>
        </div>
          ))
        } 
        
        {    
          gymData.map(gyms => (
        <div className={Styles.innerDiv}>
        <h2>Gender allowed</h2>
        <p>{gyms.gender} allowed</p>
        </div>
          ))
        }
         
        {    
          gymData.map(gyms => (
        <div className={Styles.split}>
            <h2 className={Styles.leftheading}>Opening Time : {gyms.openingtime}</h2>
            <h2 className={Styles.rightHeading}>Closing Time : {gyms.closingtime}</h2>
        </div>
           ))
        }
         

        <div className={Styles.addimage}>
                         
        </div>

        <div className={Styles.service}>
            <h2>Services they Provide<br/><br/></h2>
                  
        </div>
        {    
          gymData.map(gyms => (
        <div className={Styles.innerDiv}>
           <h2>Subscription Price ( per head in RS. )</h2>
           <p>RS. <span>{gyms.subscriptionprice}</span></p>
        </div>
          ))
        }  

        {/*additionl buttons*/}
        <div className={Styles.buttonsSection}>
            <Button className={Styles.button}>Check active subscribers</Button>
            <Button className={Styles.button} onClick={() => setOnEdit(true)}>Edit Detail<EditIcon/></Button>

                {
                    onEdit && <EditGymProfile setOnEdit={setOnEdit} />
                }

        </div>
        
    
        </div>


    )
}

export default GymProfile
