import Styles from './Booking.module.css';
import { Icon } from '@material-ui/core';
import { CalendarToday } from '@material-ui/icons';
import { QueryBuilder } from '@material-ui/icons';
import { Create } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';




function Booking() {
  
    return (
      <div class={Styles.container}>
        <form className={Styles.form}>
         <div className={Styles.row}>
          <div style={{display : 'flex'}}>
            <div style={{paddingTop: 10+'px'}}><CalendarToday /></div>
          <p>On 7th November 2020</p>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{paddingTop: 12+'px'}}><QueryBuilder /></div>
            <p> At 6:00 pm </p>
          </div>
          <div style={{paddingTop: 10+'px'}}>
          <Create />
          </div>
          </div>
          <div>
            <h4>PLEASE ENTER YOUR DETAILS</h4>
            <input style={{outline :'none'}}className={Styles.input} type="text" id="fname" name="firstname" placeholder="Full Name " ></input>
          </div>
          <div className={Styles.second}>
            <div>
            <input style={{outline :'none'}} className={Styles.number} type="number" id="fname" name="firstname" placeholder="+91" min="0" ></input>
            </div>
            <div>
            <input style={{outline :'none'}} className={Styles.mobilenumber} autoFocus={false} type="number" id="fname" name="firstname" placeholder="Mobile Number" min="0" ></input>
            </div>
          </div>
          <h4>PLEASE SELECT METHOD OF PAYMENT</h4>
          <div className={Styles.payment}>
          <div className={Styles.button_container}>
           <Button variant="contained" className={Styles.cards}>Cards</Button>
           <Button variant="contained" color="primary" className={Styles.wallet}>
            Wallet
           </Button>
           <Button variant="contained" color="primary" className={Styles.upi}>
            UPI
           </Button>
          </div> 
          
          <div>
          <Button variant="contained" color="primary" className={Styles.ok_button}>
           <ArrowRightAlt />
           </Button>
          </div>
          
          </div>

        </form>
      </div>
        
    )
}

export default Booking
