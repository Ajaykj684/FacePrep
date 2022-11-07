import { createContext ,useState,useEffect} from 'react';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children})=> {

 let [user,setUser] = useState()

 let contextData = {
  user:user,
  setUser : setUser
 }

return (
   <AuthContext.Provider value={contextData}>
          {children}
  </AuthContext.Provider>
  )

}