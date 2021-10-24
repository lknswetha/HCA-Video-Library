import axios from 'axios';
const KEY = 'AIzaSyCczSGIr2Mw7xlBu7R41cMAnEawOy_W3pw';
const CHANNEL_ID ='UCL03ygcTgIbe36o2Z7sReuQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        channelId:CHANNEL_ID
    }
})