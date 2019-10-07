import React from 'react';
import Story from '../components/story';


export default function ListStory({listStory}){

    return(
        listStory.map((storyId, key) =>(
            <Story key={key} storyId={storyId}></Story>
        ))
    )
}