const express = require('express');
const fs = require('fs-extra');
const router = express.Router();
const filePath = 'moviedb.json';

const readMovies = async () => {
   try {
        const data = await fs.readFile(filePath);
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, JSON.stringify([]));
            return [];
        } else {
            throw error;
        }
    }
};

const writeMovies = async (movies) => {
    await fs.writeFile(filePath, JSON.stringify(movies, null, 2));
};

router.get('/', async (req, res) => {
    const movies = await readMovies();
    res.json(movies);
});


router.post('/', async (req, res) => {
    const newMovie = req.body;
    
    if (!newMovie.title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const movies = await readMovies();

    newMovie.id = movies.length ? movies[movies.length - 1].id + 1 : 1;
    newMovie.watched = false;
    newMovie.rating = null;
    newMovie.review = '';
    movies.push(newMovie);
    await writeMovies(movies);
    res.status(201).json(newMovie);
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedMovie = req.body;

    if (!updatedMovie.title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    
    const movies = await readMovies();
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    movies[index] = { ...movies[index], ...updatedMovie };
    await writeMovies(movies);
    res.json(movies[index]);
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readMovies();
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    const deletedMovie = movies.splice(index, 1);
    await writeMovies(movies);
    res.json(deletedMovie[0]);
});


router.patch('/:id/status', async (req, res) => {
    const { id } = req.params;
    const { watched } = req.body;
    const movies = await readMovies();
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    movies[index].watched = watched;
    await writeMovies(movies);
    res.json(movies[index]);
});

router.patch('/:id/review', async (req, res) => {
    const { id } = req.params;
    const { rating, review } = req.body;

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }
    
    const movies = await readMovies();
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    movies[index].rating = rating;
    movies[index].review = review;
    await writeMovies(movies);
    res.json(movies[index]);
});

module.exports = router;
