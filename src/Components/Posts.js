import React from 'react';
import Accordion from './Accordion.js';

function Posts() {

    return (
        <React.Fragment>
            <div className="jumbotron rounded-0 text-left text-white shadow" style={{ backgroundImage: 'url(img/milky-way-_1920x1080.jpg)', backgroundSize: 'cover', }}>
                <h1 className="mt-3 pt-4 mb-n1 text-uppercase display-4 text-center">Posts</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <Accordion />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Posts;