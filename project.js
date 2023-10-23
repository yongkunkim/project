const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODk3ZTkzYmM0OGNjNmJhMmY1MTEyNzc1Y2JlMjY2NSIsInN1YiI6IjY1MmYyOWI5MGNiMzM1MTZmNzQ5NDFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpKFXvFfl0VaMBTtqd168I_GlNJPZs0eqAbWBYj0v5Q'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(movies => {
        const cardlist = document.querySelector("#cardlist")
        movies.results.forEach(movie => {
            let card = document.createElement('div')
            card.classList.add('movie-card')

            const img = document.createElement("img")
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            card.appendChild(img)

            const title = document.createElement("h3")
            title.textContent = `${movie.title}`
            card.appendChild(title)

            const overview = document.createElement("p")
            overview.textContent = `${movie.overview}`
            card.appendChild(overview)

            const rating = document.createElement("p")
            rating.textContent = `영화평점 : ${movie.vote_average}`
            card.appendChild(rating)

            card.addEventListener("click", function () {
                alert(`ID : ${movie.id}`);

            })
            cardlist.appendChild(card)
        })
    })
    .catch(err => console.error(err));

const searchbtn = document.querySelector("#search-btn")
searchbtn.addEventListener("click", search => { 
})
