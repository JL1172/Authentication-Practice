import React from "react";
import { StyledForm } from "./styling/styledComponents";
import axios from "axios";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            username: "",
            password: "",
        }
    }
    makeVisible = () => {
        this.setState({ ...this.state, visible: !this.state.visible });
    }
    change = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }
    login = (e) => {
        console.log(this.props)
        e.preventDefault();
        const insertion = { username: this.state.username, password: this.state.password }
        axios.post("http://localhost:5001/api/login", insertion)
            .then(res => {
                window.localStorage.setItem("token",JSON.stringify(res.data.token))
                this.props.navigate("/protected"); 
            })
            .catch(err => console.error(err.message));
    }
    render() {
        return (
            <div>
                <StyledForm>
                    <div id="loginHead">
                        <h3>Login <span className="material-symbols-outlined">
                            login
                        </span></h3>
                    </div>
                    <div id="contents">
                        <form onSubmit={(e) => this.login(e)}>
                            <div className="container">
                                <input name="username" onChange={(e) => this.change(e)} value={this.state.username} type="text" placeholder="Username" />
                                <span className="material-symbols-outlined lock">
                                    account_circle
                                </span>
                            </div>
                            <div className="container">
                                <input name="password" onChange={(e) => this.change(e)} value={this.state.password}
                                    type={this.state.visible ? "text" : "password"} placeholder="Password" />
                                <span style={{ cursor: "pointer", transition: ".2s" }} onClick={this.makeVisible} className="material-symbols-outlined lock">
                                    {!this.state.visible ? "lock" : "lock_open"}
                                </span>
                            </div>
                            <div className="container">
                                <input type="submit" value="Sign In" />
                            </div>
                        </form>
                    </div>
                </StyledForm>
            </div>
        )
    }
}