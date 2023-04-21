import "./news.css";
import { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "d4914aa146mshd12a724298b1875p1d807ejsn5d3173ab71b7",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bing-news-search1.p.rapidapi.com/news",
          options
        );
        const responJson = await response.json();

        setNews(responJson.value);
      } catch (err) {
        console.log("Erro: " + err);
      }
    };
    fetchData();
  }, []);

  console.log(news);

  return (
    <div className="news">
      {news.map((value, index) => {
        return (
          <div key={index} className="news-content">
            <a href={value.url} target="_blank" rel="noreferrer">
              <div className="news-contents-title">
                <h1>{value.name}</h1>
              </div>
              <div className="news-content-description">
                <h3>{value.description}</h3>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default News;

/* 
  ANOTHER WAY TO MANIPULATE THE API
  fetch(
    "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=4ae23b384da244d3bf5261fc818dcdcc"
  )
    .then((resp) => resp)
    .then((respj) => respj.json())
    .then((response) => console.log(response.articles));
*/
