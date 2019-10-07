import React, {useState, useEffect} from 'react';
import {useFetch} from '../api/hooks';
import ListStory from './listStory';

export default function Orchestrator({view}){
    const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
    const SUFFIX_URL = '.json?print=pretty';

    const [urlApi, setUrlApi] = useState(`${BASE_URL}/topstories/${SUFFIX_URL}`);    
    const[data, loading] = useFetch(urlApi);
    

    const makeView = (toCompare) => {
       switch(toCompare) {
            case 'home':
            case 'top':
                setUrlApi(`${BASE_URL}/topstories/${SUFFIX_URL}`);
                break;
            case 'new':
                setUrlApi(`${BASE_URL}/newstories/${SUFFIX_URL}`);
                break;
            default:
                setUrlApi(`${BASE_URL}/topstories/${SUFFIX_URL}`);
       }
    };
    
    useEffect(() =>{
        makeView(view);        
    });

    
    
    return(
        <div>
        {
            loading ? ("Carregando...")
            :
            (
                <ListStory listStory={data}></ListStory>
            )
        }
        </div>
    )
}