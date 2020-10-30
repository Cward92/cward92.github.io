import React from 'react';
import Data from '../Blogs.json';


function Accordion() {
    const data = Data.Blogs;
    const cardCreate = data.map((x, index) => {
        return (
            <div className="card mb-4">
                <div className="card-header" id={x.Heading}>
                    <h5 className="mb-0">
                        <button className="btn" data-toggle='collapse' data-target={x.CollapseTarget} >
                            {x.Date}
                        </button>
                    </h5>
                </div>
                <div id={x.Collapse} className={index === 0 ? 'collapse show' : 'collapse'} aria-labelledby={x.Heading} data-parent="#accordion">
                    <div className="card-body">
                        <div className="img" style={{ height: 300 }}>
                            <img alt='' style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={x.Img}></img>
                        </div>
                        <hr></hr>
                        <h5 className="card-title">{x.Title}</h5>
                        <p className="card-text">{x.P1}</p>
                        <p className="card-text">{x.P2}</p>
                        <p className="card-text">{x.P3}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div id="accordion">
            {cardCreate}
        </div>
    );
}
export default Accordion;