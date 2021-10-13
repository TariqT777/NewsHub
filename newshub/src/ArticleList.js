import { Link } from 'react-router-dom';
import {useEffect} from "react";
import fetchData from './API';

const ArticleList = (props) => {

    useEffect(() => {
        fetchData();
        }, []);
    const articles = props.articles;
    

    return ( 
        
        <div className="article-list">
             {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <a href = "https://www.cnn.com/2021/10/11/us/wisconsin-parent-lawsuit-covid-school/index.html"><img src={article.pic} alt = "" /></a>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                </div>
            ))}
            
        </div>
     );

     
}
 
export default ArticleList;