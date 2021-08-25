import ChevronRight from '@material-ui/icons/ChevronRight';
import React from 'react'
import Styles from './Client.module.css';
import ClientModel from './ClientModel/ClientModel';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
function Client() {
    return (
        <div className={Styles.main}>
            <p className={Styles.para}>Served to</p> 
            <h1 className={Styles.heading}>Our Clients</h1> 
            <div className={Styles.scroll}>
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
                <ClientModel ImageTag={`/client.png`} title={`MyClient`} />
            </div>

            <div className={Styles.arrow}>
                       <ChevronLeftIcon />
                       <ChevronRightIcon />
            </div>
        </div>
    )
}


export default Client
