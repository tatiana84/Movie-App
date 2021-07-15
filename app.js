const movieApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&#39';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const section = document.getElementById('movie');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function showMovies (url){
    try{
        const respons = await fetch(url);
        const movie = await respons.json();
        const movieData = movie.results;
    
        movieData.forEach(el => {
            const div = document.createElement('div');
            const image = document.createElement('img');
            const text = document.createElement('h4');
            const rating = document.createElement('h4');

            text.innerHTML = `${el.title}`;
            image.src = imgPath + el.poster_path;
            rating.innerHTML = `${el.vote_average}`;

            div.appendChild(image);
            div.appendChild(text);
            div.appendChild(rating);
            section.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}

showMovies(movieApi);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    section.innerHTML = '';

    const searchMovie = search.value;
    
    if (searchMovie) {
        showMovies(searchApi + searchMovie);
        search.value = '';
    }
}); 