import {useState} from 'react';

const Home = () => {

    /*const [name, setName]= useState('Testing');

    const handleClick = () =>{
        setName('It worked!')

         <p>{name}</p>
        <button onClick={handleClick}>Click me</button>
    } */

    const[articles, setArticles] = useState([
        {title: 'CNN Article', body: 'Text', author: 'CNN Author', id: 1},
        {title: 'Fox Article', body: 'Text', author: 'Fox Author', id: 2},
        {title: 'MSNBC Article', body: 'Text', author: 'MSNBC Author', id: 3},
    ]);
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                </div>
            ))}
           
        </div>
     );
}
 
export default Home;