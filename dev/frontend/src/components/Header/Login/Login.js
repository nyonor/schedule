import { useEffect, useState } from 'react';
import * as FacebookSdk from "../../../helpers/3dPartyAuthentication/facebookSdk";
import "./Login.css";

function Login(props) {

    const [FB, setFB] = useState({});

    useEffect(() => {
        FacebookSdk.init((fb) => {
            setFB(fb);
            fb.getLoginStatus(function (response) {
                handleFacebookResponse(response);
            });
        });
    });

    const login = () => {
        FB.login((response) => {
            handleFacebookResponse(response);
        }, {scope: 'public_profile', return_scopes: true});
    };

    const logout = () => {
        FB.logout((response) => {
            handleFacebookResponse(response);
        })
    };

    const handleFacebookResponse = (response) => {
        console.log(response);
        let uid = 0;
        if (response.status === 'connected') {
            uid = response.authResponse.userID;
        }

        if (uid !== props.user.id)
            props.user.onChange({
                id: uid,
                name: null
            });
    };

    return (
        props.user.id !== 0
            ?
            <div class="navbar-nav login">
                <div class="nav-item text-nowrap">
                    {/* <a class="nav-link px-3" href="#">{props.UserName}</a> */}
                    <a class="nav-link px-3" href="#" onClick={logout}>
                        <i class="bi bi-box-arrow-down"></i>
                    </a>
                </div>
            </div>
            :
            <div class="navbar-nav login">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="#" onClick={login}>
                        <i class="bi bi-facebook"></i>
                    </a>
                </div>
            </div>
    );
}

export default Login;