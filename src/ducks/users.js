import axios from 'axios'

const initialState = {
   user: {}
}
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export function getUserInfo() {

   const userData = axios.get('/auth/me').then( res => {
      return res.data
   })

   return {
      type: UPDATE_USER_INFO,
      payload: userData
   }
}

export default function reducer(state = initialState, action) {
   switch (action.type) {

      case UPDATE_USER_INFO + '_FULFILLED':
         return Object.assign({}, state, {user: action.payload})
      default:
         return state;
   }
}