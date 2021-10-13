import {useState} from 'react';
import ArticleList from './ArticleList';
import images from './images/index.js';
import API from './API';

const Home = () => {
    

    /*const [name, setName]= useState('Testing');

    const handleClick = () =>{
        setName('It worked!')

         <p>{name}</p>
        <button onClick={handleClick}>Click me</button>
    } */


    const[articles, setArticles] = useState([
        {title: 'CNN Article', body: 'Text', author: 'CNN Author', id: 1, 'pic':images.CNNLogo},
        {title: 'Fox Article', body: 'Text', author: 'Fox Author', id: 2, 'pic':images.FoxLogo},
        {title: 'MSNBC Article', body: 'Text', author: 'MSNBC Author', id: 3,'pic':images.NYTimesLogo},
    ]);
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <API />
            <ArticleList articles = {articles}/>
           
        </div>
     );
}
 
export default Home;