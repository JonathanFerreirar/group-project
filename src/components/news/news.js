function News() {
  fetch(
    "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=4ae23b384da244d3bf5261fc818dcdcc"
  ).then((response) => {
    response.json().then((respJson) => {
      console.log(respJson);
    });
  });

  return <div>News Working</div>;
}

export default News;
