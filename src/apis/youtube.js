import axios from 'axios';
const KEY = 'AIzaSyC8Vcb6mScRmUQPMCJ70cI2pma-0Cq4apo';
const CHANNEL_ID ='UCL03ygcTgIbe36o2Z7sReuQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY,
        channelId:CHANNEL_ID
    }
})