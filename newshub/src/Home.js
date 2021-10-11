import {useState} from 'react';
import ArticleList from './ArticleList';

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
            <ArticleList articles = {articles}/>
           
        </div>
     );
}
 
export default Home;