const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moviesRoutes = require('./routes/movies');

const app = express();
const PORT = 5000;

app.use(cors(
    {
        origin: ['http://localhost:3000','https://movie-watchlist-app-client.vercel.app'],
        method : ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
    }
));

app.use(bodyParser.json());

app.use('/movies', moviesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
