import React, {useEffect, useState} from 'react'
import { useSelector} from 'react-redux'
import { getDataAPI } from '../utils/fetchData'



const Main = () => {

    const { auth } = useSelector(state => state)
    const [gymData, setGymData] = useState([]);
    
    
    useEffect(() => {
        const fetching = async () => {
          const   res   = await getDataAPI('gyms', auth.token);

          console.log(res.data.gyms)


          setGymData(res.data.gyms)
    
          
            
        };
    
    
        fetching();
    }, []);

    return (
        <div>
             {
                 
                 gymData.map(gyms => (
                     <div>
                     <h2>{gyms.gymname}</h2>
                     <h3>{gyms.about}</h3>
                     <h4>{gyms.openingtime}</h4>
                     </div>

                     
                     
                 ))
             } 
             
        </div>
    )
}

export default Main
