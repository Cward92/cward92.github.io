import React from 'react';

class Posts extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="jumbotron rounded-0 text-left text-white shadow" style={{backgroundImage: 'url(img/milky-way-_1920x1080.jpg)', backgroundSize: 'cover',}}>
                    <h1 class="mt-3 pt-4 mb-n1 text-uppercase display-4 text-center">Blogs</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div id="accordion">
                                <div class="card mb-4">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn" data-toggle="collapse" data-target="#collapseOne">
                                                Blog Week 6 / Oct 2, 2020
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="img" style={{height:300}}>
                                                <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="img/Woods.jpeg"></img>
                                            </div>
                                            <hr></hr>
                                            <h5 class="card-title">Sixth Week at Awesome!</h5>
                                            <p class="card-text">This week was busy as usual.</p>
                                            <p class="card-text">We had our weekly reviews.</p>
                                            <p class="card-text">For our projects...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn" data-toggle="collapse" data-target="#collapseTwo">
                                                Blog Week 6 / Oct 2, 2020
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="img" style={{height:300}}>
                                                <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="img/Woods.jpeg"></img>
                                            </div>
                                            <hr></hr>
                                            <h5 class="card-title">Sixth Week at Awesome!</h5>
                                            <p class="card-text">This week was busy as usual.</p>
                                            <p class="card-text">We had our weekly reviews.</p>
                                            <p class="card-text">For our projects...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Posts;