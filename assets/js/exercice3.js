$(document).ready(function() {
    const apiKey = "dcc5510e6e415df2ecbcc2ef34bd573d";

    function rechercherFilm(query) {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                afficherResultats(data.results);
            },
            error: function(error) {
                console.error("Erreur lors de la requête :", error);
            }
        });
    }

    function afficherResultats(results) {
        const movieResults = $("#movieResults");
        movieResults.empty();

        results.forEach(movie => {
            const movieCard = `
                <div class="col-md-4 mb-4">
                    <div class="card mx-auto bg-dark-subtle rounded-5 border border-4 border-black p-1">
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top rounded-5" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">Date de sortie : ${movie.release_date}</p>
                            <div class="card-text">Note des utilisateurs :
                                <span class="ms-5 p-2 rounded-5">${movie.vote_average}/10</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `;

            movieResults.append(movieCard);
        });
    }

    $("#searchForm").on('submit', function(event) {
        event.preventDefault();
        const query = $("#searchInput").val();
        if (query) {
            rechercherFilm(query);
        }
    });
});

