import { useEffect, useState } from 'react';
import * as FacebookSdk from "../../../helpers/3dPartyAuthentication/facebookSdk";

function Login(props) {

    const [FB, setFB] = useState({});

    useEffect(() => {
        FacebookSdk.init((fb) => {
            setFB(fb);
            fb.getLoginStatus(function (response) {
                console.log(response);
            });
        });
    });

    return (
        props.IsUserLoggedIn
            ?
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="#">{props.UserName}</a>
                    <a class="nav-link px-3" >Sign Out</a>
                </div>
            </div>
            :
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="#" onClick={() => FB.login()}>
                        {/* <div class="fb-login-button" data-width="" data-size="small" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="false"></div> */}
                        Facebook login
                    </a>
                    <a class="nav-link px-3" href="#" onClick={() => FB.logout()}>
                        {/* <div class="fb-login-button" data-width="" data-size="small" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="false"></div> */}
                        Facebook logout
                    </a>
                </div>
            </div>
    );
}

export default Login;