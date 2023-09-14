import { Circles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const nav = useNavigate(); 
    window.localStorage.clear(); 
    setTimeout(()=> {
        nav("/login")
    },400)
    return(
        <div style={{ flexDirection: "column", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Circles
            height="100"
            width="100"
            color="royalblue"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        <h2>Logging Out</h2>
    </div>
    )
}
export default Logout; 