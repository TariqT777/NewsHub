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


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <API />

        </div>
     );
}
 
export default Home;