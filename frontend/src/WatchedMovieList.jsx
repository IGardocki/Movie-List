import React, {useContext} from "react"
import { MovieContext } from "./MovieContext"

export const WatchedMovieList = () => {

    const {watched, setWatched, toWatch, setToWatch} = useContext(MovieContext);

    return (
        <>
            <h2>Watched Movies</h2>
            {watched.map(movie => {
                return (
                    <div>{movie.title}</div>
                )
            })}
        </>
    )
}