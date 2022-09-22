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
            <input
                value={addText}
                placeholder={"add to movies"}
                onChange={(e) => setAddText(e.target.value)}
            />
        </form>

    );
}