const URL_GET_STORY_DATA = `https://hacker-news.firebaseio.com/v0/item/"`;
//const URL_GET_STORY_DATA = `https://hacker-news.firebaseio.com/v0/item/${storyId}"`;
const URL_API_SUFFIX = ".json?print=pretty";
const hackerNewsApi = {};

hackerNewsApi.getStory = (storyId) => {
    fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
        .then(res => res.json())
        .then(res => console.log(res))
};

export default hackerNewsApi;