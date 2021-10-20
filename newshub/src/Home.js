import {useState} from 'react';
import API from './API';

const Home = () => {
    

    /*const [name, setName]= useState('Testing');

    const handleClick = () =>{
        setName('It worked!')

         <p>{name}</p>
        <button onClick={handleClick}>Click me</button>
    } */


    return ( 
        <div className="PageArticles">
            <h2>Homepage</h2>
            <API />

        </div>
     );
}
 
export default Home;