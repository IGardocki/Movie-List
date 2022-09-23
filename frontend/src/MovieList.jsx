import { useContext } from "react"
import { MovieContext } from "./MovieContext"
import { movies } from "./movies"

export const MovieList = () => {
    const { movieTitles, setMovieTitles, watched, setWatched, toWatch, setToWatch } = useContext(MovieContext);

    return (
        <>
            {movieTitles.map(movie => {
                return (
                    <div class="bg-light text-center">
                       <h4>{movie.title}</h4> 

                        <button class="btn btn-primary" onClick={() => {
                            fetch(`http://localhost:8080/movies/${movie.id}`, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            })
                        }
                        }>
                            Delete this movie</button>

                        <button class="btn btn-primary" onClick={() => {
                            let temps = watched;
                            temps.push(movie);

                            movie.watched = true;
                            setWatched(temps);
                            // console.log(temps);
                            // console.log(movieTitles);
                            setToWatch(movieTitles.filter(item => item !== movie));
                            // console.log(movieTitles.filter(item => item !== movie))
                        }}>Add to Watched</button>
                        <p>    </p>
                    </div>

                )
            }
            )}
        </>
    )
}