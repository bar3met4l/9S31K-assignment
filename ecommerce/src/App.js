import React, {useState, useEffect} from "react";
import './App.css';
import CardComponent from './components/atoms/cardcomponents';

function App() {
  const [feed, setFeed] = useState([]);

    async function getFeed() {
        const url = 'https://fake-store-api.mock.beeceptor.com/api/products';
        const data = await fetch(url);
        const response = await data.json();
        console.log("response",response);
        setFeed(response);
    
    }
    useEffect(() => {
      getFeed();
    }, []);
    
  return (
    <div className="App">
      {feed.map((value, index) => (
        
        <CardComponent key={index} feedData={value} />
      ))} 
    </div>
  );
}

export default App;
