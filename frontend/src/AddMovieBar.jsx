import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
// import { search } from '../../server/app';

export const AddMovieBar = () => {
    const { searchText, setSearchText, movieTitles, setMovieTitles, addText, setAddText } = useContext(MovieContext)

    return (
        <form onSubmit={e => {
            e.preventDefault();

            fetch('http://localhost:8080/movies', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: addText
                })
            })
                .then(fetch('http://localhost:8080/movies')
                    .then(res => res.json())
                    .then(data => setMovieTitles(data)))
        }
        }>
            <div class="form-group">
                <input class="form-control"
                    value={addText}
                    placeholder={"Add to Movies"}
                    onChange={(e) => setAddText(e.target.value)}
                />
            </div>
        </form>

    );
}