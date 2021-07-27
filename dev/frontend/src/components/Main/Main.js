import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function Main() {

    const [backendOnline, updateBackendOnline] = useState(false);
    const [backendLastResponse, updateBackendLastResponse] = useState('');

    const checkBackendOnline = () => {
        fetch('/api')
            .then((response) => {
                response.text()
                    .then((text) => {
                        updateBackendLastResponse(text);
                        updateBackendOnline(text != null);
                    })
            })
            .then(fullfiled => {
                console.log(fullfiled);
            })
            .then(err => {
                console.log(err);
            });
    };

    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar></Sidebar>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div
                        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Dashboard</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button>
                        </div>
                    </div>
                    {
                        { backendOnline }
                            ?
                            <h3>
                                Backend ONLINE {backendLastResponse}
                            </h3>
                            :
                            <h3>
                                Backend offline... damn... {backendLastResponse}
                            </h3>

                    }
                    <button onClick={checkBackendOnline}>Check IS backend online</button>
                    <h2>Section title</h2>
                    <div class="table-responsive">
                        <noscript>You need to enable JavaScript to run this app.</noscript>
                        <div id="root"></div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Main;