import React from 'react';

const BlogCard = (props) => {
    const {name,body,img} = props.blog || {};
    return (
        <div className="col-md-3 col-sm-1 gy-3">
            <div class="card" style={{"width": "18rem"}}>
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-danger fw-bold">{name}</h5>
                            <p class="card-text">{body}</p>
                        </div>
            </div>
        </div>
    );
};

export default BlogCard;