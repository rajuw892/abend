import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useEffect } from 'react'
import PageRender from './PageRender'
import Home from './pages/home'
import Notify from './components/alert/Alert'
import Main from './pages/Main'
import { getGym } from './redux/actions/gymAction'
import { useSelector, useDispatch  } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import Header from './components/Header/header'
import { GLOBALTYPES } from './redux/actions/globalTypes'
 
 const App = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(refreshToken())
  
      
    },[dispatch] )


   

    
 


   return (

    <Router>
      <Notify />

         
        
    
        <div>
          {auth.token && <Header />}
           
             
           <Route exact path="/" component={auth.token ? Main : Home} />
            

          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
     </Router>
   )
 }
 
 export default App
 