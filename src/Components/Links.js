import React from 'react';
import Data from '../Blogs.json';

function Links() {
    const data = Data.Links;
    const createLinks = data.map((x, index) => {
        return (
            <div class="row mt-3">
                <div class="media">
                    <a href={x.URL}><img class="mr-3 img-fluid" src={x.Img} style={{ maxWidth: "100px" }}
                        alt="Generic placeholder image" /></a>
                    <div class="media-body">
                        <h5 class="mt-0 font-weight-light">{x.Title}</h5>
                        <p class="mx-2 p-2 bg-info font-italic rounded-lg" style={{textShadow: "2px 2px 2px black", boxShadow: "0 0 4px 2px white inset"}}>
                            {x.Description}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="jumbotron rounded-0 text-left text-white shadow"
                style={{ backgroundImage: 'url(img/milky-way-_1920x1080.jpg)', backgroundSize: 'cover', }}>
                <h1 className="mt-3 pt-4 mb-n1 text-uppercase display-4 text-center">Links</h1>
            </div>
            <div class="container text-light">
                <h2 class="display-5">Helpful Links</h2>
                {createLinks}
            </div>
        </>
    )
}

export default Links;