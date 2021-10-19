import { useState, useEffect } from 'react';
function SportsAPI(){
const [articles, setArticles] = useState(null);
  
    // + adding the use
    useEffect(() => {
      getData();
  
      // we will use async/await to fetch this data
      async function getData() {
        const res = await fetch('https://newsapi.org/v2/top-headlines?' +
        'country=us&category=sports&apiKey=3fdff4b6daf648ac91dd3a97a1b68644');
        const data = await res.json();
  
        // store the data into our Articles variable
        setArticles(data) ;
      }
    }, []); 
    return (
        <div>
      
          {/* display articles from the API */}
          {articles && (
            <div className="articles">
      
              {/* loop over the articles */}
              {/* Articles.articles here because map needs to grab the aritcles section (which is an array) 
              from the API, in order to iterate over it. */}
              {articles.articles.map((article, index) => (
                <div key={index}>
                  <img src={article.urlToImage} alt=""/>
                  <h2><a href={article.url}>{article.title}</a></h2>
                  <h3>{article.description}</h3>
                  <br></br>
                  <br></br>
                  
                </div>
              ))}
      
            </div>
          )}
        </div>
      )
}



export default SportsAPI;