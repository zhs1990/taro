import { LOGIN_GET_CODE, LOGIN_IN } from '@/constants/login'
  
  const INITIAL_STATE = {
    
  }
  
  export default function login(state = INITIAL_STATE, action) {
    switch(action.type) {
      case LOGIN_GET_CODE: {
        return {
          ...state
        }
      }
      case LOGIN_IN: {
        console.log(state)
        return { ...state }
      }
      default:
        return state
    }
  }
  