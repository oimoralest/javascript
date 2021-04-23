import express, { response } from 'express';
import axios from 'axios';
import 'dotenv/config.js';

const homeRouter = express.Router();
const apiKey = process.env.API_KEY;
const apiBaseUrl = process.env.API_BASE_URL;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

homeRouter.get('/', async (req, res, next) => {
    try {
        const resp = await axios.get(nowPlayingUrl)
        if (resp.status !== 200) {
            throw 'Error'
        }
        res.render('index',{
            title: 'Now in theaters',
            movies: resp.data,
            imageBaseUrl: res.locals.imageBaseUrl
        })
    } catch {
        res.render('notFound')
    }
});

export default homeRouter;
