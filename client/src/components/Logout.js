import { useNavigate } from "react-router-dom";
const Logout = () => {
    const nav = useNavigate(); 
    window.localStorage.clear(); 
    setTimeout(()=> {
        nav("/login")
    },200)
    return(
        <div>Loggin Out...</div>
    )
}
export default Logout; 