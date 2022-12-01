import React from "react";

function NewsItem(props) {  
  let { source, author, title, description, url, urlToImage, publishedAt, content } = props.artObj;
  return (
    <div>
      <div className="card my-3" style={{"height": "600px", "overflow": "hidden"}}>
        <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger">{source.name}</span>
        <img style={{"width": "100%", "height": "auto", "display": "block"}} 
        src={urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p> {author ? author : ""}</p>

k
          <div style={{"position": "absolute", "bottom": "0px", "zIndex": "2", "backgroundColor": "#ff3d00" ,
           "width": "100%", "height": "15%"}} className="text-white pt-2">

          <p>{new Date(publishedAt).toUTCString()}</p>
          <div style={{"display": "flex","justifyContent": "flex-end", "paddingRight":"25px"}}>
          
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>

          </div>
         

          </div>
          

        </div>
      </div>
    </div>
  );
  
}

export default NewsItem;
