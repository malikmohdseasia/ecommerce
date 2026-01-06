import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}:any) => {

    const user = JSON.parse(localStorage.getItem('user') || "{}");

    if(!user?.email){
        return <Navigate  to="/login" />
    }

    return children;
}

export default ProtectedRoute