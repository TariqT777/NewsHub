const fetchData = () => {
    return fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-10-13&sortBy=popularity&apiKey=3fdff4b6daf648ac91dd3a97a1b68644")
          .then((response) => response.json())
          .then((data) => console.log(data));}

export default fetchData;