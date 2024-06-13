// import {useAuth0} from '@auth0/auth0-react'
import { useValue } from '../context/ContextProvider';
import { toast } from "react-toastify";


const useAuthCheck = () => {

    // const {isAuthenticated} = useAuth0()
    const {
      state: { currentUser },
      dispatch,
    } = useValue();


    const validateLogin = () => {
        if(!currentUser)
        {
            toast.error("you must be logged in", {position: "bottom-right"})
            return false
        } else return true
    }
  return (
    {
        validateLogin
    }
  )
}

export default useAuthCheck