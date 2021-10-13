import { useState, useEffect } from 'react';
function API(){
const [articles, setArticles] = useState(null);
  
    // + adding the use
    useEffect(() => {
      getData();
  
      // we will use async/await to fetch this data
      async function getData() {
        const res = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-10-13&sortBy=popularity&apiKey=3fdff4b6daf648ac91dd3a97a1b68644");
        const data = await res.json();
  
        // store the data into our Articles variable
        setArticles(data) ;
      }
    }, []); 
    return (
        <div>
          <h1>News Articles</h1>
      
          {/* display articles from the API */}
          {articles && (
            <div className="articles">
      
              {/* loop over the articles */}
              {/* Articles.articles here because map needs to grab the aritcles section (which is an array) 
              from the API, in order to iterate over it. */}
              {articles.articles.map((article, index) => (
                <div key={index}>
                  <h2>{article.title}</h2>
                  <h3>{article.description}</h3>
                </div>
              ))}
      
            </div>
          )}
        </div>
      )
}



export default API;
