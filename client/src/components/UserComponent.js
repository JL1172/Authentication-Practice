import axios from "axios";
import React from "react";
import { axiosWithAuth } from "./util/axiosWithAuth";
import { ProfileCard } from "./styling/styledComponents";

async function fetchProfileData(url) {
    const res = await axios.get(url)
    try {
        return res;
    } catch {
        return new Error;
    }
}

export default class UserComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            linkedin: "",
            linkedinUrl: "",
            github: "",
            gitHubUrl: "",
            githubApi: "",
            userCardInformation: [],
        }
    }
    componentDidMount() {
        axiosWithAuth().get("http://localhost:5001/api/data")
            .then(res => {
                const data1 = res.data.data[0];
                this.setState({
                    ...this.state, linkedin: data1.linkedin, linkedinUrl: data1.linkedinUrl,
                    github: data1.github, githubUrl: data1.githubUrl, gitHubApi: data1.gitHubApi
                })
                fetchProfileData(data1.gitHubApi).then(res => this.setState({ ...this.state, userCardInformation: res.data }))
            }).catch(err => console.error(err.message));
    }
    render() {
        return (
            <ProfileCard style={{ marginTop: "5rem", fontSize: "50px" }}>
                <div id="headline">
                    {this.state.github}
                </div>
                <div id="profilePic">
                    <img src={this.state.userCardInformation.avatar_url} />
                    <div><span className="material-symbols-outlined">
                        info
                    </span>{this.state.userCardInformation.bio}</div>
                </div>
                <div id="main">
                        <h3>Social</h3>
                    <div id = "social">
                        <a target = "_blank" href = {this.state.linkedinUrl}>
                        <img title="My LInkedIn Profile"
                            src="https://static.vecteezy.com/system/resources/previews/021/492/181/original/linkedin-logo-free-download-free-png.png" />
                        </a>
                        <a target = "_blank" href = {this.state.userCardInformation.html_url}>
                        <img id = "second" title="My Github Profile"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png" />
                        </a>
                    </div>
                </div>
            </ProfileCard>
        )
    }
}