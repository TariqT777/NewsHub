const ArticleList = (props) => {

    const articles = props.articles;

    return ( 
        <div className="article-list">
             {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ArticleList;