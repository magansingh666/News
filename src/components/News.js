import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  


  async function fetchData(page_no) {
    console.log("\n\n\n\n\n\n calling fetch data ");
    props.setProgress(20);
   
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}`;
    let proper_url = url + "&page=" + page_no + "&pageSize=" + "20";

   // let u1 = "http://127.0.0.1:5001/pcs-study/us-central1/getNews" ;
    let cloud_link = "https://us-central1-pcs-study.cloudfunctions.net/getNews";


    let data = await fetch(cloud_link, {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json',      
      },
      body: JSON.stringify({ "link": proper_url }),
    });

    props.setProgress(50);
    let parsedData = await data.json();
    setArticles([...articles, ...parsedData.articles]);
    setPage(page_no);
    setTotal(parsedData["totalResults"]);   
    props.setProgress(100);
  }

  
  useEffect(() => {
    fetchData(1);
  }, []); 

  return (
    <div className="container my-5" style={{"margin": "0px auto"}}>      

      <InfiniteScroll
        dataLength={articles.length}
        next={() => {fetchData(page+1);}}
        hasMore={articles.length < total}
        loader={<Spinner />}
        endMessage={<p className="mx-auto d-block">You have seen it all</p>}
      >
        <h2 className="my-4 text-center">Top {props.category} headlines</h2>
        <div className="row container">
          {articles.map((e) => (
            <div className="col-md-4" key={e.url}>
              <NewsItem artObj={e} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}




/*
let countryOptions = [{"name":"United States", "value": "us"}, {"name": "India", "value":"in"}, {"name": "United Kindom", "value":"eg"}];



   const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": user_token,
      },
      body: JSON.stringify({ title, description, tag }),
    });


    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${key}`;



    , {
      method:  "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"url" : proper_url})
    }

*/