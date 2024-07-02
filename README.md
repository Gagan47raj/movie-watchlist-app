Here's a `README.md` file for your [movie-watchlist-app](https://github.com/Gagan47raj/movie-watchlist-app) with detailed information on the project's functionality, setup, and usage.


# Movie Watchlist App

A full-stack application for managing a personal movie watchlist. This project is built using React for the frontend and Node.js for the backend.

## Functional Requirements

### 1. Movie Management

- **Add Movie**
    - Form fields: Title (required), Description, Release Year, Genre.
    - On successful submission, the movie is added to the watchlist.
- **Edit Movie**
    - Users can select a movie from the watchlist to edit its details.
    - Form fields pre-filled with existing movie details.
    - On successful submission, the movie details are updated.
- **Delete Movie**
    - Users can delete a movie from the watchlist.
    - Confirmation prompt before deletion.

## Project Structure

```
movie-watchlist-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the frontend directory and add the following environment variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

4. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

- Access the app at [http://localhost:3000](http://localhost:3000).
- Use the interface to add, edit, or delete movies in your watchlist.

## Deployment

### Vercel (Frontend)

1. Install the [Vercel CLI](https://vercel.com/docs/cli):
    ```bash
    npm install -g vercel
    ```

2. Deploy the frontend:
    ```bash
    cd frontend
    vercel
    ```

3. Follow the Vercel prompts to complete the deployment.

### Vercel (Backend)

1. Create a `vercel.json` file in the root of the backend directory with the following content:
    ```json
    {
      "version": 2,
      "builds": [
        { "src": "server.js", "use": "@vercel/node" }
      ],
      "routes": [
        { "src": "/(.*)", "dest": "server.js" }
      ]
    }
    ```

2. Deploy the backend:
    ```bash
    cd backend
    vercel
    ```

3. Follow the Vercel prompts to complete the deployment.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: JSON File


# Live Demo : https://movie-watchlist-app-lyart.vercel.app/

## Contributing

Feel free to contribute to the project by creating issues or submitting pull requests. Ensure to follow the project's code of conduct.



## Contact

For any questions or suggestions, feel free to contact the project maintainer.
gagan20rajput@gmail.com
---

Happy watching! 🎥
```

Feel free to modify the details as needed. This `README.md` file provides a comprehensive overview and instructions for the project.
