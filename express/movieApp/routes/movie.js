import express from 'express';
import axios from 'axios';

const movieRouter = express.Router();
const apiKey = process.env.API_KEY;
const apiBaseUrl = process.env.API_BASE_URL;

movieRouter.get('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const resp = await axios.get(`${apiBaseUrl}/movie/${id}?api_key=${apiKey}`);
		if (resp.status !== 200) {
			throw 'Error';
		}
		res.render('singleMovie', {
			movie: resp.data,
			imageBaseUrl: res.locals.imageBaseUrl,
		});
	} catch {
		res.render('notFound');
	}
});

movieRouter.post('/search', (req, res, next) => {
	try {
		const search = encodeURI(req.body.termSearch);
		res.redirect(`/movie/search/${req.body.filter}?search=${search}`);
	} catch {
		res.render('notFound');
	}
});

movieRouter.get('/search/movie', async (req, res, next) => {
	try {
		const search = req.query.search;
		const resp = await axios.get(
			`${apiBaseUrl}/search/movie?query=${search}&api_key=${apiKey}`,
		);
		if (resp.status !== 200) {
			throw 'Error';
		}
		res.render('index', {
			title: `Results by ${search}`,
			movies: resp.data,
			imageBaseUrl: res.locals.imageBaseUrl,
		});
	} catch {
		res.render('notFound');
	}
});

movieRouter.get('/search/person', async (req, res, next) => {
	try {
		const search = req.query.search;
		const resp = await axios.get(
			`${apiBaseUrl}/search/person?query=${search}&api_key=${apiKey}`,
		);
		if (resp.status !== 200) {
			throw 'Error';
		}
		res.render('actors', {
			title: `Results by ${search}`,
			actors: resp.data,
			imageBaseUrl: res.locals.imageBaseUrl,
		});
	} catch {
		res.render('notFound');
	}
});

export default movieRouter;
