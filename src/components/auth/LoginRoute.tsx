import { Navigate } from "react-router-dom";

const LoginRoute = ({children}:any) => {
  
    const user =JSON.parse(localStorage.getItem('user') || "{}");

    if(user?.email){
       return <Navigate to={'/home'}/>      
    }
    return children;
}

export default LoginRoute