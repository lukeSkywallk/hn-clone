import React, {useEffect} from 'react';
import hackerNewsApi from './api/hackerNewsApi.js';

export default function App() {

  useEffect(() => {
    async function getData(){
      hackerNewsApi.getStory(1);
    }

    getData();
    
  },[]);

  return (    
    <div className="App">
      
    </div>
  );
}