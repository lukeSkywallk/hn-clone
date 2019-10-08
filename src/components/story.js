import React, {useState, useEffect} from 'react';
import { useFetch } from '../api/hooks';

export default function Story({storyId}){
    const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
    const SUFFIX_URL = '.json?print=pretty';
    const [urlApi, setUrlApi] = useState(undefined);
    const [data, loading] = useFetch(urlApi);

    useEffect(() =>{
        setUrlApi(`${BASE_URL}/item/${storyId}${SUFFIX_URL}`)
    },[setUrlApi, storyId]);



//    https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
    return(
        <div>
            {
            loading ? ("Carregando...")
            :
            (data.url)
            }
        </div>
    );
}