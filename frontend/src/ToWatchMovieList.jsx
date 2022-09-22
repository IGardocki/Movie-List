import React, {useContext} from "react"
import { MovieContext } from "./MovieContext"

export const ToWatchMovieList = () => {

    const {movieTitles, watched, toWatch} = useContext(MovieContext);

    return (
        <>
            <h2>Movies To Watch</h2>
            {toWatch.map(unwatchedMovie => {
                return(
                    <div>{unwatchedMovie.title}</div>
                )
            })
            
            }
        </>
    )
}