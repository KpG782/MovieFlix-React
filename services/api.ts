export const LMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDU4NTBiZTA3ODVjZmVjYjA4NjczNjBiNTM0MzQxOSIsIm5iZiI6MTc0OTQwMTEzNC42NDUsInN1YiI6IjY4NDViZTJlNGU4M2Y3YzA5YmRlNmRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxgR9b3wmqDeqnYrD9vT8SPsbG5JZpGps0-2gdeoCXE",
    headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDU4NTBiZTA3ODVjZmVjYjA4NjczNjBiNTM0MzQxOSIsIm5iZiI6MTc0OTQwMTEzNC42NDUsInN1YiI6IjY4NDViZTJlNGU4M2Y3YzA5YmRlNmRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxgR9b3wmqDeqnYrD9vT8SPsbG5JZpGps0-2gdeoCXE`,
    },
};

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${LMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${LMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: "GET",
        headers: LMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};

export const fetchMovieDetails = async (movieId: string) : Promise<MovieDetails> => {
    try {
        const response = await fetch(`${LMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${LMDB_CONFIG.API_KEY}`,
        {
            method: 'GET',
            headers: LMDB_CONFIG.headers,
        });

        if (!response.ok) throw new Error(`Failed to fetch movie details`);

        const data = await response.json();

        return data;

    }catch (error) {
        console.log(error);
        throw error;
    }
}