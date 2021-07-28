import { useEffect, setState } from 'react';
import * as FacebookSdk from "../../../helpers/3dPartyAuthentication/FacebookSdk";

function Login(props) {

    useEffect(() => {
        FacebookSdk.init();
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
                    <a class="nav-link px-3" href="#">
                        <div class="fb-login-button" data-width="" data-size="small" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                    </a>
                </div>
            </div>
    );
}

export default Login;