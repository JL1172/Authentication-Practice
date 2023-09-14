import React from "react";
import { Route, redirect } from "react-router-dom";
import Navigate from "react-router-dom";
import UserComponent from "./UserComponent";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

export default function PrivateRoute () {
    const nav = useNavigate();
    return (
        <div>
    { window.localStorage.getItem("token") ? <UserComponent /> :  <div style={{ flexDirection: "column", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Circles
                            height="100"
                            width="100"
                            color="royalblue"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        <h2>Return to Login</h2>
                    </div>}
    </div>
    )
}
