import { GYM_TYPES } from '../actions/gymAction'

 

const initialState = {
    loading: false,
    gyms: []
}

const gymReducer = (state = initialState, action) => {

    switch(action.type){
        case GYM_TYPES.CREATE_GYM:
            return{
                ...state,
                gyms: [action.payload, ...state.gyms]
            };
        case GYM_TYPES.LOADING_GYM:
            return{
                ...state,
                loading: action.payload
            };
        case GYM_TYPES.GET_GYM:
            return{
                ...state,
                gym: action.payload.gym
                     
                };   
         

                            
        default:
            return state;    
    }

}

export default gymReducer