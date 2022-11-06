import React from "react";

function NewsItem(props) {  
  let { source, author, title, description, url, urlToImage, publishedAt, content } = props.artObj;
  return (
    <div>
      <div className="card my-3">
        <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger">{source.name}</span>
        <img src={urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p>{new Date(publishedAt).toUTCString()}</p>
          <p> {author ? author : ""}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default NewsItem;
