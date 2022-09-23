
import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
// import { search } from '../../server/app';

export const SearchBar = () => {
    const { searchText, setSearchText, movieTitles, setMovieTitles } = useContext(MovieContext)
    //   const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <form onSubmit={e => {
            e.preventDefault();
            setSearchText(e.target.value)
            setMovieTitles(movieTitles.filter(movie => movie.title.toLowerCase().includes(searchText)))
        }}>
            <div class="form-group">
                <input class="form-control"
                    value={searchText}
                    placeholder={"Search Movies"}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

        </form>

    );
}