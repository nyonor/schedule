function Login(props) {

    const signIn = function() {
        return true;
    }

    const signOut = function() {
        return true;
    }

    return (
        props.IsUserLoggedIn
            ?
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="#">{props.UserName}</a>
                    <a class="nav-link px-3" onClick={signOut}>Sign Out</a>
                </div>
            </div>
            :
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="#" onClick={signIn}>Sign In</a>
                </div>
            </div>
    );
}

export default Login;