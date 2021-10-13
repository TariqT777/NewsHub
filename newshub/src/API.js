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
          <h1>Game of Thrones articles</h1>
      
          {/* display articles from the API */}
          {articles && (
            <div className="articles">
      
              {/* loop over the articles */}
              {articles.map((article, index) => (
                <div key={index}>
                  <h2>{article.name}</h2>
                </div>
              ))}
      
            </div>
          )}
        </div>
      )
}



export default API;
