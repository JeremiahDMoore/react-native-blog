import axios from "axios";

export default axios.create({
    // UPDATE THIS NGROK ADDRESS EVERY 8 HOURS
    baseURL: 'http://752c1254ef89.ngrok.io'
});