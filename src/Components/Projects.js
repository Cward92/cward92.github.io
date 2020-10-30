import React from 'react';
import Data from '../Blogs.json';


function Projects() {
    const data = Data.Projects;
    const createCard = data.map((x, index) => {
        return (
            <div className="card">
                <img className="card-img-top" src={x.Img} alt="Card image cap" style={index !== 0 ? {maxWidth: "200px"} : undefined}/>
                <div className="card-body">
                    <a href={x.URL}><h5 className="card-title">{x.Title}</h5></a>
                    <p className="card-text">{x.Description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{x.Updated}</small>
                </div>
            </div>
        )
    })
    return (
        <React.Fragment>
            <div className="jumbotron rounded-0 text-left text-white shadow"
                style={{ backgroundImage: 'url(img/milky-way-_1920x1080.jpg)', backgroundSize: 'cover', }}>
                <h1 className="mt-3 pt-4 mb-n1 text-uppercase display-4 text-center">Projects</h1>
            </div>
            <div className="container">
                <h2 className="mb-3">Recent Projects:</h2>
                <div className="card-group">
                    {createCard}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects;