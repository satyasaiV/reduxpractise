import { DATA_API } from '../actions/types';

const initialState = {
    datas : {},
    hit : {
        city : 'Banglore'
    }
};

export default function(state = initialState, action) {
    switch(action.type){
        case DATA_API:
            return {
                ...state,
                datas : action.payload,
                hit : 'hello'
              }; 
        default:
      return state;
    }
}