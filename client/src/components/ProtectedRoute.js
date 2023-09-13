import React from "react";
import { Route, redirect } from "react-router-dom";
import Navigate from "react-router-dom";
import UserComponent from "./UserComponent";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute () {
    return (
        <div>
    { window.localStorage.getItem("token") ? <UserComponent /> : "No data"}
    </div>
    )
}
