import { GLOBALTYPES } from './globalTypes'
import { postDataAPI, getDataAPI, patchDataAPI} from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
 

export const GYM_TYPES = {
    CREATE_GYM: 'CREATE_GYM',
    LOADING_GYM: 'LOADING_GYM',
    GET_GYM: 'GET_GYM',
    UPDATE_GYM: 'UPDATE_GYM',
     

    
}


export const createGym = ({gymData, auth, images}) => async (dispatch) => {
    let media = []
     
    try {
        
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        if(images.length > 0) media = await imageUpload(images)
        
        const res = await postDataAPI('gyms',  { ...gymData, images: media } , auth.token)

       

        dispatch({ 
            type: GYM_TYPES.CREATE_GYM, 
            payload: {...res.data.newGym, user: auth.user} 
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: false} })

       

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}


export const updateGym = ({gymData, images, auth}) => async (dispatch) => {
    let media = []
     

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        if(images.length > 0) media = await imageUpload(images)

        const res = await patchDataAPI('gyms', { ...gymData, images: media }, auth.token)

        dispatch({ type: GYM_TYPES.UPDATE_GYM, payload: res.data.newGym })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {success: res.data.msg} })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}
