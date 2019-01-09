import { DATA_API } from './types';
import axios from 'axios'
const key = 'viz_5c29b6d4436e1'
export const fetchDataApi = () => dispatch => {
    fetch('https://dataapi.lemnisk.co/v1/user/profile?key=' + key,{
        credentials: 'include',
        method : 'GET',
        headers: {
            'x-api-key':'NRFUQneZ1U8A5ixtvtR4Q8S4MLPtuHgS73TZmK6Z',
            'x-api-secret':'bDtkjJ5nY3LexMNf'
          }
    })
    .then(res => res.json())
    .then(datas =>
      dispatch({
        type: DATA_API,
        payload: datas
      })
    );
   /*  axios.get('https://dataapi.lemnisk.co/v1/user/profile?key=viz_5c29b6d4436e1',
    {
        headers : {
            'x-api-key': 'NRFUQneZ1U8A5ixtvtR4Q8S4MLPtuHgS73TZmK6Z',
            'x-api-secret': 'bDtkjJ5nY3LexMNf'
        }
    })
    .then(res => dispatch({
    type : DATA_API,
    payload : datas
    })
    ); */
};