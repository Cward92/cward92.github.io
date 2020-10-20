import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Welcome to My Blog!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {props.children}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;