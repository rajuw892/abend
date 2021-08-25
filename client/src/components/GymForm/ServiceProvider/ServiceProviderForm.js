import React, {useState} from 'react'
import Styles from './SPForm.module.css';
import {Button, Avatar, IconButton} from '@material-ui/core';
import ServicesLayout from './Services/ServicesLayout';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
function ServiceProviderForm() {
   
    {/*this is the form seletor*/}
    
    const [formSwitch, setFormSwitch] = useState(false);
    const [isPopup, setIsPopup] = useState(true);
    const [PopupMessage, setPopupMessage] = useState("this is great to see you here we are providing servces on this loudu");

    const DisplayPopup = (message) =>{
        setPopupMessage(message);
        setIsPopup(true);
    }

    const HidePopup = () =>{
        setIsPopup(false);
    }
    

    return (
        <div className={Styles.formSection}>
            {formSwitch ?
            (<>
               <div className={Styles.left}>
                 <h1 className={Styles.formHeading}>Select the service you can serve best</h1>
                 <h3 className={Styles.formHeadingBlack}>Fittness Related Services</h3>
                   <div className={Styles.servicesProvide}>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                           <ServicesLayout ServiceName={`GYM`}/>
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                           <ServicesLayout ServiceName={`Personal Trainer`}/>
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                          <ServicesLayout ServiceName={`Dance Academy`}/>  
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Dance Personal Trainer`}/>
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Trekking Event`}/>
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Martial Art Trainer`}/>
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Martial Art Academy`}/>
                        </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Yoga & Meditation`}/>
                        </div>
                    </div>
                      
                      {/*Sports Related*/}
                    <h3 className={Styles.formHeadingBlack}>Sports Related Services</h3>
                   <div className={Styles.servicesProvide}>
                         <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                         <ServicesLayout ServiceName={`Swimming Academy`}/>
                         </div>
                         <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                         <ServicesLayout ServiceName={`Horse Riding Academy`}/>
                         </div>
                         <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                         <ServicesLayout ServiceName={`Adventure`}/>
                         </div>
                         <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                         <ServicesLayout ServiceName={`Athletes`}/>
                         </div>
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Triathlon`}/>
                        </div>
                    </div>
 
                    {/*Medical Related*/}
                    <h3 className={Styles.formHeadingBlack}>Medical Related Services</h3>
                   <div className={Styles.servicesProvide}>
                       <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                       <ServicesLayout ServiceName={`Online Consultancy`}/>
                       </div>
                        
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Appointment System`}/> 
                        </div>
                        
                        <div className={Styles.wrapper}  onClick={() => DisplayPopup("this is really really useful for us")}>
                        <ServicesLayout ServiceName={`Patheology`}/> 
                        </div>
                        
                    </div>

                    {isPopup? (<div className={Styles.popupAddService}>
                       <div>
                       <h3 className={Styles.inputService}>{PopupMessage}</h3>
                       <Button className={Styles.AddServiceButton} onClick={() =>{HidePopup()}}>Add Service</Button>
                       <Button className={Styles.CancelServiceButton} onClick={() =>{HidePopup()}}>Cancel</Button>
                       </div>
                </div> ): (<> </>)}
               </div>

               <div className={Styles.right}>
                      {/*image section*/}
                      <h1 className={Styles.WhiteHeading}> Already have an<br/>account ? </h1>
                      <Button className={Styles.buttonWhite} onClick={() =>{setFormSwitch(true)}}>LOG IN</Button>
                </div> 
            </>):
            
            (<>
            
                <div className={Styles.left}>
                     {/*form section*/} 
                     <h1 className={Styles.formHeading}>You have been Successfully Signed up.<br/>Please Enter some of your details</h1>
                     
                     {/*form*/}
                     <form className={Styles.form}>
                        <div className={Styles.uploadLogo}>
                        <Avatar className={Styles.logo}/>
                         <AddCircleRoundedIcon className={Styles.icon} />
                        </div>
                         <input className={Styles.input} type="email" placeholder="Email"/>
                         <input className={Styles.input} type="text" placeholder="Name" />
                         <h3 className={Styles.inputHeading}>Date of Birth</h3>
                         <input className={Styles.input} type="date" placeholder="Date of Borth"/>
                         <input className={Styles.input} type="location" placeholder="Location" />
                         <div className={Styles.buttondiv}>
                         <Button className={Styles.button} onClick={() =>{setFormSwitch(true)}}>CONFIRM</Button>
                         </div>
                     </form>
                </div>
    
                <div className={Styles.right}>
                      {/*image section*/}
                      <h1 className={Styles.WhiteHeading}> Already have an<br/>account ? </h1>
                      <Button className={Styles.buttonWhite} onClick={() =>{setFormSwitch(true)}}>LOG IN</Button>
                </div>  
                
                </>)}   

                
        </div>
    )
}

export default ServiceProviderForm
